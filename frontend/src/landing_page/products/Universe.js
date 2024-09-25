import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <h1 className=" mt-5 fs-2 mb-4 " >The Zerodha Universe</h1>
        <p className="mb-3" >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-2 mt-5 ">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-2 ">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-4 ">
          <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-2 ">Algo and strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-4 ">
          <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-4 ">
          <img src="media/images/zerodhaFundhouse.png" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-4 ">
          <img src="media/images/goldenpiLogo.png" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-4 ">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>

        <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{ width: "20%", margin: "0 auto" }} >Sign up Now</button>

      </div>
    </div>
  );
}

export default Universe;
