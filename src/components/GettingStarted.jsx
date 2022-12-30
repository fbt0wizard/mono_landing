import React from "react";
import "../styles/gettingStarted.css";
import { FiArrowUpRight } from "react-icons/fi";

const GettingStarted = () => {
  return (
    <section className="__getting_container">
      <h2>Getting started</h2>
      <main className="__wrapper">
        <section className="__hero">
          <div className="__child_container">
            <img
              src="https://monoassets.com/f/118499/x/10923dd075/icon_powerful-apis-1.svg"
              alt=""
            />
            <h2>Powerful APIs and easy-to-use resources</h2>
            <a href="#">
              <span>Read our API Docs</span>
              <FiArrowUpRight />
            </a>
          </div>
          <div className="__child_container2">
            <div>
              <img
                src="https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="__grid_cards">
          <ul>
            <li>
              <figure>
                <img
                  src="https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg"
                  alt=""
                />
              </figure>
              <h4>Plug-and-play SDKs</h4>
              <a href="#">
                <span>Explore our SDKs</span>
                <FiArrowUpRight />
              </a>
            </li>
            <li>
              <figure>
                <img
                  src="https://monoassets.com/f/118499/x/15f1b3037b/icon_beautiful-ux.svg"
                  alt=""
                />
              </figure>
              <h4>Beautiful seamless UX</h4>
              <a href="#">
                <span>See a demo</span>
                <FiArrowUpRight />
              </a>
            </li>
            <li>
              <figure>
                <img
                  src="https://monoassets.com/f/118499/x/5d33f99a17/icon_slack.svg"
                  alt=""
                />
              </figure>
              <h4>Always-on support</h4>
              <a href="#">
                <span>Join us on Slack</span>
                <FiArrowUpRight />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </section>
  );
};

export default GettingStarted;
