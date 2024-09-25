import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom p-5 mt-5 text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-2 mb-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      <div className="row p-5">
        <div className="col-4 p-5 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 pt-4 pb-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/intradayTrades.svg" className="px-5 pt-5 pb-3" />
          <h1 className="fs-3 pt-4 pb-4">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 pt-4 pb-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
