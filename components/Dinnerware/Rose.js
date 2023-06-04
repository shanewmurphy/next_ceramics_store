import React from "react";

const Rose = ({ loadNoir, loadIvory, loadOlive }) => {
  return (
    <div>
      <div className="flex lg:w-11/12 md:w-11/12 sm:w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto mt-20">
        <div className="lg:w-2/4 bg-red-200">
          <div className="lg:w-560 mx-auto bg-green-300">ss</div>
        </div>
        <div className="lg:w-2/4">BB</div>
      </div>
      <h1>Rose</h1>
      <button onClick={loadNoir}>Load Noir</button>
      <button onClick={loadIvory}>Load Ivory</button>
      <button onClick={loadOlive}>Load Olive</button>
    </div>
  );
};

export default Rose;
