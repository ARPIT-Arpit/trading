import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 col-8 offset-2"
        />
        <h1 className="mt-4 mb-3">Invest in everything</h1>
        <p className="fs-5 col-10 offset-1">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >Sign up Now</button>
      </div>
    </div>
  );
}

export default Hero;
