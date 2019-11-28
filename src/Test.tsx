import React from "react";
import logo from "./logo.svg";
import { observer } from "mobx-react";

@observer
export class Test extends React.Component {
  render() {
    return <div>Test</div>;
  }
}
