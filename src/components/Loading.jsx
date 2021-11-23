import React from "react";

const Loading = () => {
  return (
    <div>
      <div class="progress m-2" style={{ height: "20px" }}>
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: `25%` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
