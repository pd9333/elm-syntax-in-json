port module Main exposing
    ( fromJS
    , main
    , toJS
    )

import Browser
import Css
import Elm.Parser
import Html.Styled exposing (button, div, h3, text, textarea)
import Html.Styled.Attributes exposing (css, value)
import Html.Styled.Events exposing (onClick, onInput)
import Json.Encode
import Result.Extra


port toJS : String -> Cmd msg


port fromJS : (Json.Encode.Value -> msg) -> Sub msg


parse : String -> Cmd msg
parse =
    Elm.Parser.parse
        >> Result.map (Debug.toString >> (++) "Success: ")
        >> Result.Extra.extract (Debug.toString >> (++) "Failed: ")
        >> Debug.log "parse"
        >> toJS


type alias Flags =
    {}


type alias Model =
    { input : String }


type Msg
    = OnInput String
    | OnParse
    | OnValueFromJS Json.Encode.Value


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
    ( { input = ""
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnValueFromJS value ->
            let
                _ =
                    Debug.log "value from JS" value
            in
            ( model, Cmd.none )

        OnInput input ->
            ( { model | input = input }, Cmd.none )

        OnParse ->
            ( model, parse model.input )


view : Model -> Html.Styled.Html Msg
view model =
    div []
        [ h3 [] [ text "Write some elm code to be parsed by elm-syntax" ]
        , viewInputArea model
        ]


viewInputArea : { a | input : String } -> Html.Styled.Html Msg
viewInputArea model =
    div []
        [ h3 [] [ text "Elm source code" ]
        , textarea
            [ value model.input
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


subscriptions : Model -> Sub Msg
subscriptions _ =
    fromJS OnValueFromJS
