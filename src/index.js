import {parse} from 'elm-debug-transformer';

import {Elm} from "./Main.elm";

const app = Elm.Main.init({node: document.getElementById("root")});
app.ports.toJS.subscribe(function (source_code) {
  app.ports.fromJS.send(parse(source_code));
});
