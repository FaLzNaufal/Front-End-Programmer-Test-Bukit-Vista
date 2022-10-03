import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh", textAlign: "center" }}>
        <LayoutContent>
          <h1>Guest Portal</h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
