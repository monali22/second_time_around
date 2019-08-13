import React from "react";
import "./style.css";

function MapWrapper(props) {
  return <div className="mapwrapper">
    <div className="container">
      {props.children}
    </div>
  </div>;
}

export default MapWrapper;