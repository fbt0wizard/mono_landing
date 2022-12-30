import React from "react";
import "../styles/features.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiTime } from "react-icons/bi"

const Features = () => {
  return (
    <section className="__features_container">
      <h2>Build for the future of digital finance.</h2>
      <p>
        Bring tomorrow's solutions to life, with our customer-focused solutions,
        today.
      </p>
      <div className="__festures_card">
        <img
          src="https://monoassets.com/f/118499/x/26e5185f10/vector-6.svg"
          alt=""
        />
        <h3>Connect</h3>
        <p>
          Securely access financial accounts for statements, transactions, and
          identity
        </p>
        <a href="/">
          <span>Start with Connect</span>
          <AiOutlineArrowRight />
        </a>
      </div>
      <div className="__side_cards">
        <div className="__side_one">
          <img
            src="https://monoassets.com/f/118499/x/4f8eb638fd/vector-1get-started-icon.svg"
            alt=""
          />
          <h3>DirectPay</h3>
          <p>
            Collect bank payments in your web or mobile app. No cards. No
            chargebacks
          </p>
          <a href="/">
            <span>Start with Connect</span>
            <AiOutlineArrowRight />
          </a>
        </div>
        <div className="__side_two">
          <img
            src="https://monoassets.com/f/118499/x/e9eb8d1c26/union.svg"
            alt=""
          />
          <h3>Percept</h3>
          <p>
            Money operations and reconciliation for all your corporate accounts,
            in one dashboard
          </p>
          <a href="/">
            <span>Request access</span>
            <BiTime />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
