import React from "react";
import "./style.css";

function MapWrapper(props) {
  return <div className="mapwrapper">{props.children}</div>;
}

export default MapWrapper;