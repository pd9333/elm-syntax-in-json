port module Main exposing
    ( fromJS
    , main
    , toJS
    )

import Browser
import Css
import Dict
import Elm.Parser
import Html.Styled exposing (a, button, div, h3, pre, text, textarea)
import Html.Styled.Attributes exposing (css, href, value)
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
        >> Result.map (Debug.log tagSuccess)
        >> Result.mapError (Debug.log tagFailure)
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
        , div [ css [ Css.marginTop <| Css.px 12 ] ]
            [ a
                [ href "https://github.com/kraklin/elm-debug-transformer#enable-custom-formatters-in-chrome-dev-tools"
                ]
                [ text "Hint: Consider use chrome and enable custom console formatter and then check output in console." ]
            ]
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
    let
        backgroundColor =
            model.parsed
                |> Result.toMaybe
                |> Maybe.andThen
                    (\node ->
                        case node.value of
                            JsonTree.TDict dict ->
                                Dict.get "name" dict
                                    |> Maybe.map (.value >> (==) (JsonTree.TString tagSuccess))

                            _ ->
                                Nothing
                    )
                |> Maybe.withDefault False
                |> (\succeed ->
                        if succeed then
                            []

                        else
                            [ css [ Css.backgroundColor <| Css.rgb 232 188 206 ] ]
                   )
    in
    div ([] ++ backgroundColor)
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
