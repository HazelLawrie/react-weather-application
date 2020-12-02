import React from "react";

export default function Date() {
  let data = {
    date: "Friday 20th November 2020",
    time: "16:00",
  };

  return (
    <div className="row">
      <h2 id="date" className="card-text col-sm date-time">
        {data.date}
        <br />
        Last updated: {data.time}
      </h2>
    </div>
  );
}
