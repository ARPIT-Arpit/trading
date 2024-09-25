import React from "react";

function NotFound() {
  return (
    <div className="container p-3">
      <div className="row text-center">
        <h1 className="mt-4 mb-3">404 Not Found</h1>
        <p className="fs-5 col-10 offset-1">
          Sorry, the page you are lookig for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
