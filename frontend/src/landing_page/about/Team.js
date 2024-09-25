import React from "react";

function Team() {
  return (
    <div className="container ">
      <div className="row p-4 border-top ">
        <h1 className="text-center mt-5 ">People</h1>
      </div>

      <div className="row p-5 fs-6 " style={{ lineHeight: "1.8rem" }}>
        <div className="col-6 text-center ">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="my-3">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        <div className="col-6 px-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
