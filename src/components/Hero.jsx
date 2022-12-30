import React, { useEffect, useRef } from "react";
import "../styles/hero.css";
import { TbBuildingBank } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { Power2, gsap } from "gsap"
import gsap from "gsap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  let prallel = useRef(null)
  let prallel2 = useRef(null)
  let prallel3 = useRef(null)
  let dashed = useRef(null)
  let dashed2 = useRef(null)
  let img = useRef(null)
  let bg = useRef(null)
  let banks = useRef(null)

  let content = useRef(null)

  useEffect(()=> {
    gsap.to(prallel, {css: {transform: "skewY(22deg)"}, duration: .8, delay: .5})
    gsap.to(prallel2, {css: {transform: "skewY(22deg)"}, duration: .8, delay: .5})
    gsap.to(prallel3, {css: {transform: "skewY(22deg)"}, duration: .8, delay: .5})

    gsap.to(prallel, {css: {transform: "translateY(20px) skewY(22deg)"}, duration: .8, delay: 1})
    gsap.to(prallel2, {css: {transform: "translateY(-40px skewY(22deg)"}, duration: .8, delay: 1})
    gsap.to(prallel3, {css: {transform: "translateY(-60px) skewY(22deg)"}, duration: .8, delay: 1})

    gsap.to(prallel, {x: 70, duration: .8, delay: 1.5})
    gsap.to(prallel2, {x: 40, duration: .8, delay: 1.5})

    gsap.fromTo(content, {opacity: 0, y: 250, scale: 0}, {scale: 1, opacity: 1, y: 0, duration: .8, delay: 2.5})

    gsap.fromTo(img, {opacity: 0, scale:0 }, {opacity: 1, scale: 1, duration: .5, delay: 3.5})

    gsap.fromTo(dashed, {opacity: 0, height: "0%"}, {opacity: 1, height: "50%", duration: .8, delay: 4})
    gsap.fromTo(dashed2, {opacity: 0, height: "0%"}, {opacity: 1, height: "50%", duration: .8, delay: 4})

    gsap.fromTo(bg, { scale: 0, css:{ width: "0%", height: "0%"}}, {scale: 1, css: {width: "100%", height: "100%"}, duration: .5, delay: 4.8})


    gsap.fromTo(banks, {opacity: 1, x: 300}, {x:0, opacity: 1, duration: 6, delay: 6,})
  }, [])
  return (
    <section className="__hero_section">
      <div>
        <div className="__new_mono">
          <a href="#">
            <span className="__btn">NEW</span>
            <span className="__text">Mono is live in Kenya!</span>
            <AiOutlineArrowRight />
          </a>
        </div>
        <div className="__content">
          <h1>Reliably access bank accounts</h1>
          <p>
            Mono helps businesses to access high-quality financial data and
            direct bank payments.
          </p>
          <div className="__action_button">
            <a href="#" className="__button_primary">
              <span>Get started for free</span>
              <AiOutlineArrowRight />
            </a>
            <a href="#" className="__button_secondary">
              <span>Contact Sales</span>
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="__fig_anim_wrapper">
        <div className="__fig_anim">
          <figure ref={el=> {prallel = el}}>
            <div className="__wrap_anim" ref={el=> content = el}>
              <div></div>
            <div className="__wrap_anim_child">
              <div className="__item_one">
                <TbBuildingBank />
              </div>
              <div className="__dividers"></div>
              <div className="__dividers __short_divider"></div>
            </div>
            <div className="__bottom_item">
              <div></div>
            </div>
            </div>
          </figure>
          <figure ref={el=> {prallel2 = el}}>
            <div className="__stroke" ref={el=> dashed = el}></div>
            <div>
              <img className="__icon2" ref={el=> img = el} src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F48x48%2F9076fbe04e%2Ffloat-logo.png&w=48&q=75" alt="" />
            </div>
            <div className="__stroke" ref={el=> dashed2 = el}></div>
          </figure>
          <figure ref={el=> {prallel3 = el}} className="__outer">
            <div className="__inner_bg" ref={el=> bg=el}>
              <div ref={el=> banks=el} style={{display: "flex"}}>
                {[1,2,34,5,6,7,6,5,4,3,2,3,4,5,6,7,73,4,5,5,64,3,2,2,2].map((it, index)=> (
                  <img
                  key={index}
                  className="__image_anim"
                  src="https://mono.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Fbank-icons-collage.4a6f14c023e28fb8fefaaea228220462.png&w=384&q=75"
                  alt=""
                />
                ))}
                </div>
                </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
