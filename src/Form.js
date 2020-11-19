import React from "react";

import Location from "./location-symbol.png";
import Search from "./search-symbol.png";

export default function Form() {
  return (
    <div>
      <form id="form-all">
        <div className="input-group">
          <input
            id="input"
            type="text"
            className="form-control"
            placeholder="Enter City..."
            autoComplete="off"
          />
          <span className="input-group-btn">
            <button id="button" className="btn btn-default" type="submit">
              <img id="search-button-image" src={Search} alt="" />
            </button>
            <button
              id="location-button"
              className="btn btn-default"
              type="button"
            >
              <img id="location-button-image" src={Location} alt="" />
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
