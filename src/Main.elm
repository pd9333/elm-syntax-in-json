module Main exposing (main)

import Browser
import Elm.Parser
import Html.Styled exposing (text)


src =
    """module Foo exposing(foo)

foo = 1
"""


parse : String -> String
parse input =
    case Elm.Parser.parse input of
        Err e ->
            "Failed: " ++ Debug.toString e

        Ok v ->
            "Success: " ++ Debug.toString v


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
    text <| parse src


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
