import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "2rem" }} >{productDescription}</p>

          <div>
            <a href={tryDemo}>
              Try Demo &nbsp; &nbsp;{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "3rem" }}>
              Learn More &nbsp; &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "3rem" }}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
