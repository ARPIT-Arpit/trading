import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
        <div className="text-center my-5 p-3">
      <h1>Technology</h1>
      <h3 className="text-muted mt-3 fs-4 mb-3" >Sleek, modern, and intuitive trading platforms</h3>
      <p className="mb-5" >
        Check out our <a href='' style={{ textDecoration: "none" }} >investment offerings{" "}
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </p>
      </div>
    </div>
  );
}

export default Hero;
