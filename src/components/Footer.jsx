import "../styles/footer.css";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="__footer_wrapper">
      <section className="__first_section">
        <h2>Start building with Mono</h2>
        <p>
          Access high-quality financial data and start processing payments
          directly from bank accounts in minutes.
        </p>
        <div className="__control_section">
          <a className="__light_button" href="#">
            <span>Start now for free</span>
            <AiOutlineArrowRight />
          </a>
          <a className="__black_button" href="#">
            <span>Talk to Sales</span>
            <AiOutlineArrowRight />
          </a>
        </div>
      </section>
      <section className="__second_section">
        <ul>
          <li className="__link_title">Products</li>
          <li>
            {" "}
            <a href="#">Connect</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Statement Pages</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">DirectPay</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">DirectPay Pages</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Portal</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Transactions</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Income</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Information</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Data Sync</a>{" "}
          </li>
        </ul>
        <ul>
          <li className="__link_title">Resources</li>
          <li>
            {" "}
            <a href="#">Developers</a>
          </li>
          <li>
            {" "}
            <a href="#">Documentation</a>
          </li>
          <li>
            {" "}
            <a href="#">API Reference</a>
          </li>
          <li>
            {" "}
            <a href="#">SDKs</a>
          </li>
          <li>
            {" "}
            <a href="#">Demo</a>
          </li>
          <li>
            {" "}
            <a href="#">Join Slack</a>
          </li>
          <li>
            {" "}
            <a href="#">Consumers</a>
          </li>
        </ul>
        <ul>
          <li className="__link_title">Company</li>
          <li>
            {" "}
            <a href="#">About us</a>
          </li>
          <li>
            {" "}
            <a href="#">Partner stories</a>
          </li>
          <li>
            {" "}
            <a href="#">Blog</a>
          </li>
          <li>
            {" "}
            <a href="#">Coverage</a>
          </li>
          <li>
            {" "}
            <a href="#">Careers</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <li className="__link_title">Legal</li>
          <li>
            {" "}
            <a href="#">End-User Policy</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Privacy Policy</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Developer Policy</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Terms of Use</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Cookies</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Security</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Policy</a>{" "}
          </li>
        </ul>
      </section>
      <section className="__third_section">
        <div>
          <img
            src="https://monoassets.com/f/118499/x/8594c87134/footer-logo.svg"
            alt=""
          />
          <p>© Mono Technologies Nigeria Limited</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">
                <BsTwitter />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <GrLinkedinOption />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
