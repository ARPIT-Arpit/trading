import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5 mb-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>

      <div className="row pb-5 px-5 mb-4">
        <div className="col-7 px-4 pb-5 ">
          <h1 className="fs-4 pb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-4" placeholder="Eg: how do i activate F&O, why is my order getting rejected..." />
            <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a><br />
          <a href="" >Kite user manual</a>
        </div>
        <div className="col-5 pt-4 ">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ display: "block", paddingBottom: "2rem" }} >Surveillance measure on scrips - August 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
