import React from "react";

function OpenAccount() {
  return (
    <div className="container p-3">
      <div className="row text-center">
        <h1 className="mt-4 mb-3">Open a Zerodha account</h1>
        <p className="fs-5 col-10 offset-1">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
