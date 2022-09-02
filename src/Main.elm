module Main exposing (main)

import Browser
import Html.Styled exposing (text)


type alias Flags =
    {}


type alias Model =
    {}


type Msg
    = Msg


main =
    Browser.element
        { init = init
        , update = update
        , view = view >> Html.Styled.toUnstyled
        , subscriptions = subscriptions
        }


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( {}, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


view : Model -> Html.Styled.Html Msg
view model =
    text "Hello World!"


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
