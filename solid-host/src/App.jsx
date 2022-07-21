import { render } from "solid-js/web";
import counterWrapper from "remote/counterWrapper";
import { createEffect } from "solid-js";
import "./index.scss";
let divRef;

const App = () => {
  createEffect(() => {
    if (divRef) counterWrapper(divRef);
  }, []);

  return (
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
      <div class="text-2xl">Host Application (with Solid Js)</div>
      <div ref={divRef} />
    </div>
  );
};
render(App, document.getElementById("app"));
