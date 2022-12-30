import React, { useEffect, useRef } from "react";
import "../styles/loader.css";
import gsap from "gsap";

const Loader = ({ animationComplete }) => {
  let box = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      box,
      { css: { width: "0px" } },
      { css: { width: "39px" }, duration: 0.5, delay: 1 }
    );
    gsap.fromTo(
      box2,
      { css: { width: "0px" } },
      { css: { width: "39px" }, duration: 0.5, delay: 1.5 }
    );
    gsap.fromTo(
      box3,
      { css: { width: "0px" } },
      { css: { width: "39px" }, duration: 0.5, delay: 2 }
    );

    gsap.to(container, {
      css: { backgroundColor: "#fff" },
      duration: 0.1,
      delay: 2.5,
    });

    gsap.to(box, {
      css: { transform: "skewY(22deg)", borderRadius: "4px" },
      duration: 1.2,
      delay: 2.5,
    });
    gsap.to(box2, {
      css: { transform: "skewY(22deg)", borderRadius: "4px" },
      duration: 1.2,
      delay: 2.5,
    });
    gsap.to(box3, {
      css: { transform: "skewY(22deg)", borderRadius: "4px" },
      duration: 1.2,
      delay: 2.5,
    });

    animationComplete()
  }, []);
  return (
    <div className="__main_container">
      <div className="__container_anim" ref={(el) => (container = el)}>
        <div className="__chips __one" ref={(el) => (box = el)}></div>
        <div className="__chips __two" ref={(el) => (box2 = el)}></div>
        <div className="__chips __three" ref={(el) => (box3 = el)}></div>
      </div>
    </div>
  );
};

export default Loader;
