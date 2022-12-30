import React, { useState, useRef } from "react";
import "../styles/navbar.css";
import { VscMenu } from "react-icons/vsc";
import DropdownMenu from "./DropdownMenu";
import gsap from "gsap";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  let flatMenu = useRef(null);
  let crossMenu = useRef(null);
  let mobileMenu = useRef(null)
  let menuControl = useRef(null)

  const animateMenu = (status) => {
    if(!menu){
      setMenu(status)
      gsap.fromTo(flatMenu, {opacity: 1, scale: 1}, {opacity:  0, scale: 0, duration: .4});
      gsap.fromTo(crossMenu, {opacity: 0, scale: 0, x: 0}, {opacity:  1, scale: 1, x: 30, duration: .4});
      gsap.fromTo(mobileMenu, {css: {height: "0%"}}, {css: {height: "100%"}, duration: .4, delay: .3} )
      gsap.fromTo(menuControl, {css: {transform: "translateY(100px)"}}, {css: {transform: "translateY(0px)"}, duration: .3, delay: .6})
    }
    if(menu){
      setMenu(status)
      gsap.fromTo(crossMenu, {opacity: 1, scale: 1, x: 30}, {opacity:  0, scale: 0, x: 0, duration: .4});
      gsap.fromTo(flatMenu, {opacity: 0, scale: 0}, {opacity:  1, scale: 1, duration: .4});
      gsap.fromTo(mobileMenu, { css: {height: "100%"}}, {css: {height: "0%"}, duration: .4, delay: .3} )
      gsap.fromTo(menuControl, {css: {transform: "translateY(0px)"}}, {css: {transform: "translateY(100px)"}, duration: .5, delay: .8})
    }
  };

  return (
    <nav className="__navbar_container">
      <div className="__navbar">
        <div>
          <img
            src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
            alt="Logo"
          />
        </div>
        <ul className="__nav_link">
          <DropdownMenu
            text="Why Mono"
            items={[
              {
                title: "Why Choose Mono",
                subTitle:
                  "Here's why 250+ Bussinesses & Developers use Mono APIs",
                img: "https://monoassets.com/f/118499/x/fdd571b7d0/nav_icon_why_mono.svg",
              },
              {
                title: "Pricing",
                subTitle:
                  "Affordable pricing for developers, SMEs and enterprices",
                img: "https://monoassets.com/f/118499/x/e137a1583c/pricing.svg",
              },
              {
                title: "See a demo",
                subTitle: "Experience Mono APIs in action",
                img: "https://monoassets.com/f/118499/x/d7b4412424/nav_icon_demo.svg",
              },
            ]}
          />
          <DropdownMenu
            text="Products"
            grid={true}
            items={[
              {
                title: "Connect",
                subTitle: "Financial account linking",
                img: "https://monoassets.com/f/118499/x/17dc066d42/connect.svg",
              },
              {
                title: "Statement Pages",
                subTitle: "No-code bank statement collection",
                img: "https://monoassets.com/f/118499/x/464e7ff2da/statement-pages.svg",
              },
              {
                title: "DirectPay",
                subTitle: "Direct bank payment collection",
                img: "https://monoassets.com/f/118499/x/58b645d888/directpay.svg",
              },
              {
                title: "DirectPay Pages",
                subTitle: "No-code bank payment collection",
                img: "https://monoassets.com/f/118499/x/4ec8eec578/direct-pay-pages.svg",
              },
              {
                title: "Portal",
                subTitle: "Link account management",
                img: "https://monoassets.com/f/118499/x/f04629fa31/portal.svg",
              },
              {
                title: "Percept",
                subTitle: "Corporate finance management",
                img: "https://monoassets.com/f/118499/x/a451eadca5/percept.svg",
              },
            ]}
          />
          <DropdownMenu
            text="Learn"
            items={[
              {
                title: "About us",
                img: "https://monoassets.com/f/118499/x/1809dcf36d/about-us-icon.svg",
              },
              {
                title: "Blog",
                img: "https://monoassets.com/f/118499/x/d8c5f5c911/blog-icon.svg",
              },
              {
                title: "Tutorials",
                img: "https://monoassets.com/f/118499/x/2329b5427d/tutorials-icon.svg",
              },
              {
                title: "Coverage",
                img: "https://monoassets.com/f/118499/x/8b9589ce43/product-icon.svg",
              },
            ]}
          />
          <DropdownMenu
            text="Developers"
            items={[
              {
                title: "Overview",
                img: "https://monoassets.com/f/118499/x/ecc89061ed/overview-icon.svg",
              },
              {
                title: "Documentation",
                img: "https://monoassets.com/f/118499/x/37ee02a98e/docs-icon.svg",
              },
            ]}
          />
        </ul>
        <div className="__call_to_action">
          <a href="#"> Sign in</a>
        </div>
        <div className="__mobile_menu">
          <div ref={(el) => (crossMenu = el)} className="__cross_svg">
          <RxCross1
            onClick={()=> animateMenu(false)}
          />
          </div>
          <div ref={(el) => (flatMenu = el)}>
          <VscMenu
            onClick={()=> animateMenu(true)}
          />
          </div>
        </div>
        {/* {menu && ( */}
          <section className="__mobile_menu_list" ref={el=> mobileMenu = el}>
            <ul>
              {/* <li>Why Mono</li> */}
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/fdd571b7d0/nav_icon_why_mono.svg"
                  alt=""
                />
                <span>Why Choose Mono</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/e137a1583c/pricing.svg"
                  alt=""
                />
                <span>Pricing</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/d7b4412424/nav_icon_demo.svg"
                  alt=""
                />
                <span>See a Demo</span>
              </li>
            </ul>
            <ul>
              {/* <li>Products</li> */}
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/17dc066d42/connect.svg"
                  alt=""
                />
                <span>Connect</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/464e7ff2da/statement-pages.svg"
                  alt=""
                />
                <span>Statement Pages</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/58b645d888/directpay.svg"
                  alt=""
                />
                <span>DirectPay</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/4ec8eec578/direct-pay-pages.svg"
                  alt=""
                />
                <span>DirectPay Pages</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/f04629fa31/portal.svg"
                  alt=""
                />
                <span>Portal</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/a451eadca5/percept.svg"
                  alt=""
                />
                <span>Percept</span>
              </li>
            </ul>
            <ul>
              {/* <li>Learn</li> */}
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/1809dcf36d/about-us-icon.svg"
                  alt=""
                />
                <span>About us</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/d8c5f5c911/blog-icon.svg"
                  alt=""
                />
                <span>Blog</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/2329b5427d/tutorials-icon.svg"
                  alt=""
                />
                <span>Tutorials</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/8b9589ce43/product-icon.svg"
                  alt=""
                />
                <span>Coverage</span>
              </li>
            </ul>
            <ul>
              {/* <li>Developers</li> */}
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/ecc89061ed/overview-icon.svg"
                  alt=""
                />
                <span>Overview</span>
              </li>
              <li>
                <img
                  src="https://monoassets.com/f/118499/x/37ee02a98e/docs-icon.svg"
                  alt=""
                />
                <span>Documentation</span>
              </li>
            </ul>
            <div className="__control_reg" ref={el=> menuControl = el}>
              <a href="">Sign in</a>
            </div>
          </section>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
