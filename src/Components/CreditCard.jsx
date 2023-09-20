import React from "react";
import "./CreditCard.css";

function CreditCard({ name, number, month, year, cvc }) {
  return (
    <>
      <div id="credit-card">
        <div className="front-card">
          <h1 className="card-number">
            {number ? number : "0000 0000 0000 0000"}
          </h1>
          <div className="card-dets">
            <p className="holder-name">{name ? name : "jane appleseed"}</p>
            <span>
              <span>{month && year ? `${month}/${year}` : "00/00"}</span>
            </span>
          </div>
        </div>
        <div className="back-card">
          <p className="card-cvc">{cvc ? cvc : "000"}</p>
        </div>
      </div>
    </>
  );
}

export default CreditCard;
