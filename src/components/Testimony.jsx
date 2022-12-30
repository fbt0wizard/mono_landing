import React, { useRef, useState } from "react";
import "../styles/testimony.css";
import { GoQuote } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Testimony = () => {
  const next = useRef();
  const prev = useRef();
  const [active, setActive] = useState({ first: false, second: true });
  return (
    <section className="__testimony_section">
      <h2>Why market leaders are choosing Mono</h2>
      <p>Here's what some of them are saying.</p>

      <div className="__carousel">
        <Carousel
          autoPlay={false}
          showStatus={false}
          renderArrowNext={(p) => (
            <span
              ref={next}
              onClick={() => {
                setActive({ first: true, second: false });
                p();
              }}
            ></span>
          )}
          renderArrowPrev={(x) => (
            <span
              ref={prev}
              onClick={() => {
                setActive({ first: false, second: true });
                x();
              }}
            ></span>
          )}
          showIndicators={false}
        >
          <div className="__testimonies">
            <div className="__testimony_child">
              <GoQuote />
              <h3>
                The onboarding and integration process with Mono was smooth. Our
                Engineering and Product teams use the dashboard to oversee our
                statement collection process.
              </h3>
              <div className="__avatar">
                <div style={{ position: "relative" }}>
                  <img
                    src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F100x100%2Fd3f0ea76d0%2Fbarima-effah-adjei-float.png&w=128&q=75"
                    alt=""
                  />
                  <div className="__badge">
                    <img
                      src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F48x48%2F9076fbe04e%2Ffloat-logo.png&w=48&q=75"
                      alt=""
                    />
                  </div>
                </div>
                <div className="__names">
                  <h6>Barima Effah-Adjei</h6>
                  <span>Co-founder, Float</span>
                </div>
              </div>
            </div>
            <div className="__testimony_child">
              <GoQuote />
              <h3>
                It's important to go with a data provider that inspires
                confidence in users to give consent to share their data; this is
                one of our favourite things about Mono.
              </h3>
              <div className="__avatar">
                <div style={{ position: "relative" }}>
                  <img
                    src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F100x100%2Fca9cb4505c%2Femmanuel-aella.png&w=128&q=75"
                    alt=""
                  />
                  <div className="__badge">
                    <img
                      src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F48x48%2Fa06f541752%2Faella-logo.png&w=48&q=75"
                      alt=""
                    />
                  </div>
                </div>
                <div className="__names">
                  <h6>Emmanuel Ogunsola</h6>
                  <span>Emmanuel Ogunsola</span>
                </div>
              </div>
            </div>
          </div>
          <div className="__testimonies">
            <div className="__testimony_child">
              <GoQuote />
              <h3>
                We can trust Mono over 90% of the time which is better than our
                previous provider. This ease & reliability are our favourite
                things about Mono.
              </h3>
              <div className="__avatar">
                <div style={{ position: "relative" }}>
                  <img
                    src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F100x100%2F2cd8463622%2Fdaniel-evolve.png&w=128&q=75"
                    alt=""
                  />
                  <div className="__badge">
                    <img
                      src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F28x27%2F0add76cce2%2Fevolve-credit-logo.png&w=32&q=75"
                      alt=""
                    />
                  </div>
                </div>
                <div className="__names">
                  <h6>Daniel Osineye</h6>
                  <span>Co-Founder/ CTO, Evolve Credit</span>
                </div>
              </div>
            </div>
            <div className="__testimony_child">
              <GoQuote />
              <h3>
                Migrating to Mono was seamless... The simplicity and stability
                of the Mono SDKs are top-notch.
              </h3>
              <div className="__avatar">
                <div style={{ position: "relative" }}>
                  <img
                    src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F100x100%2F85067c5bf5%2Fpeter-inflow.png&w=128&q=75"
                    alt=""
                  />
                  <div className="__badge">
                    <img
                      src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F24x25%2F06ca4092a4%2Finflow-finance-logo.png&w=32&q=75"
                      alt=""
                    />
                  </div>
                </div>
                <div className="__names">
                  <h6>Peter Olusesan</h6>
                  <span>CEO, Inflow Finance</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="__control">
          <div className="__buttons">
            <div
              className="__indicator"
              style={{ backgroundColor: active.second && "#000" }}
              onClick={() => prev.current.click()}
            ></div>
            <div
              className="__indicator"
              style={{ backgroundColor: active.first && "#000" }}
              onClick={() => next.current.click()}
            ></div>
          </div>
          <div className="__buttons">
            <button
              className={active.second ? "__secondary" : "__primary"}
              type="button"
              onClick={() => prev.current.click()}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className={active.first ? "__secondary" : "__primary"}
              type="button"
              onClick={() => next.current.click()}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
