import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5" style={{ marginTop: "4rem" }} >
          <h1>{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "2rem" }}>
            {productDescription}
          </p>

          <p>
            <a href={learnMore}>
              Learn More &nbsp; &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>

        <div className="col-6 px-5 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
