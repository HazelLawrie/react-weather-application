import React from "react";

export default function City(props) {
  return (
    <div className="row">
      <h2 id="city" className="card-title col-sm location">
        {props.city}
      </h2>
    </div>
  );
}
