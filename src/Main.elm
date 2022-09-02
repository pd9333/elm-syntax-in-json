port module Main exposing
    ( fromJS
    , main
    , toJS
    )

import Browser
import Css
import Elm.Parser
import Html.Styled exposing (button, div, h3, pre, text, textarea)
import Html.Styled.Attributes exposing (css, value)
import Html.Styled.Events exposing (onClick, onInput)
import Json.Decode
import Json.Encode
import JsonTree
import Result.Extra


port toJS : String -> Cmd msg


port fromJS : (Json.Encode.Value -> msg) -> Sub msg


tagSuccess : String
tagSuccess =
    "Success"


tagFailure : String
tagFailure =
    "Failure"


parse : String -> Cmd msg
parse =
    let
        addTag tag =
            Debug.toString
                >> (++) ": "
                >> (++) tag
    in
    Elm.Parser.parse
        >> Result.map (addTag tagSuccess)
        >> Result.Extra.extract (addTag tagFailure)
        >> toJS


type alias Flags =
    {}


type alias Model =
    { input : String
    , parsed : Result String JsonTree.Node
    , treeState : JsonTree.State
    }


type Msg
    = OnInput String
    | OnParse
    | OnValueFromJS Json.Encode.Value
    | OnJsonTreeState JsonTree.State


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view >> Html.Styled.toUnstyled
        , subscriptions = subscriptions
        }


init : Flags -> ( Model, Cmd Msg )
init _ =
    let
        input =
            """module Foo exposing(foo)

foo = 1
"""
    in
    ( { input = input
      , parsed = Err "Waiting for input..."
      , treeState = JsonTree.defaultState
      }
    , parse input
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnValueFromJS value ->
            ( { model
                | parsed =
                    value
                        |> JsonTree.parseValue
                        |> Result.mapError Json.Decode.errorToString
              }
            , Cmd.none
            )

        OnInput input ->
            ( { model | input = input }, Cmd.none )

        OnParse ->
            ( model, parse model.input )

        OnJsonTreeState treeState ->
            ( { model | treeState = treeState }, Cmd.none )


view : Model -> Html.Styled.Html Msg
view model =
    div []
        [ h3 [] [ text "Write some elm code to be parsed by elm-syntax" ]
        , viewInputArea model
        , viewJsonTree model
        ]


viewInputArea : { a | input : String } -> Html.Styled.Html Msg
viewInputArea { input } =
    div []
        [ h3 [] [ text "Elm source code" ]
        , textarea
            [ value input
            , onInput OnInput
            , css
                [ Css.width (Css.px 400)
                , Css.height (Css.px 200)
                , Css.fontSize (Css.px 14)
                ]
            ]
            []
        , div [] [ button [ onClick OnParse ] [ text "Parse" ] ]
        ]


viewJsonTree : { a | parsed : Result String JsonTree.Node, treeState : JsonTree.State } -> Html.Styled.Html Msg
viewJsonTree model =
    div []
        [ h3 [] [ text "JSON Tree View" ]
        , case model.parsed of
            Ok rootNode ->
                JsonTree.view rootNode
                    { colors = JsonTree.defaultColors
                    , onSelect = Nothing
                    , toMsg = OnJsonTreeState
                    }
                    model.treeState
                    |> Html.Styled.fromUnstyled

            Err e ->
                pre [] [ text ("Invalid JSON: " ++ e) ]
        ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    fromJS OnValueFromJS
