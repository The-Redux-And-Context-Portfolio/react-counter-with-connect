/* node modules */
import React from "react";

/* app imports */
import "./common/css/common.scss";
import "./style.scss";
import Counter from "./components/counter/index";
import Buttons from "./components/buttons";
import Controls from "./components/controls";

function App(): JSX.Element {
  return (
    <div className="mainContainer positionRelative">
      <Controls sound={true}/>
      <Counter counter={0}/>
      <Buttons />
    </div>
  );
}

export default App;
