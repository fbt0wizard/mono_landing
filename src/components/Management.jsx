import React, { useState } from "react";
import "../styles/management.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const data = [
  {
    page: "Lending",
    title: "Carbon's personalized loan offers",
    contentOne:
      "Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.",
    contentTwo:
      "Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes. They get cash flow on the accounts for up to 12 months, all seamlessly without writing a single line of code.",
    image:
      "https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2Fx%2Fa991888bce%2Fcarbon.svg&w=1920&q=75",
    pop: "https://monoassets.com/f/118499/x/547cef85d5/carbon-logo.svg",
  },
  {
    page: "Financial Management",
    title: "Inflow's Personal Finance Manager",
    contentOne:
      "Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.",
    contentTwo:
      "Just by linking their financial accounts to the Inflow app using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances and transactions across accounts, create budgets, and get personal insights on their spending habits.",
    image:
      "https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2Fx%2F0983cb5a55%2Finflow-app-mock-up.svg&w=1920&q=75",
    pop: "https://monoassets.com/f/118499/x/c5a9041e2f/inflow-use-case-logo.svg",
  },
  {
    page: "Account Verification",
    title: "CRenmoney's secure onboarding",
    contentOne:
      "Renmoney needed to streamline the verification of new users during onboarding.",
    contentTwo:
      "Using Mono Connect, Renmoney is able to verify users' account information in seconds by having them link their financial accounts.",
    image:
      "https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2Fx%2F0fcf35c4df%2Frenmoney-app-mockup.svg&w=1920&q=75",
    pop: "https://monoassets.com/f/118499/x/31d2114f49/renmoney-use-case-logo.svg",
  },
  {
    page: "Payments",
    title: "Lemonade Finance's cross-border transfers",
    contentOne:
      "Lemonade finance makes it easy to send and receive money from Nigeria, Kenya, Ghana, Canada, and the UK.",
    contentTwo:
      "Using DirectPay, Lemonade enables its users to make secure direct cash deposits to be transferred to the country of their choice.",
    image:
      "https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2Fx%2F71d9034b55%2Flemonade-app-mockup.svg&w=1920&q=75",
    pop: "https://monoassets.com/f/118499/x/dcd2af0aee/lemonade-use-case-logo.svg",
  },
];
const Management = () => {
  const [page, setPage] = useState("Lending");
  return (
    <section className="__management_section">
      <h2>Businesses building with Mono</h2>
      <p>
        Here are some of the interesting features and experiences powered by
        Mono.
      </p>
      <div className="__management_card">
        <div className="__management_title">
        <ul>
          {data.map((title, index) => (
            <li
              onClick={() => setPage(title.page)}
              className={page === title.page ? "__active" : "__inactive"}
              key={index}
            >
              {title.page}
            </li>
          ))}
        </ul>
        </div>
        <div>
          {data.map((item, index) => {
            if (page === item.page) return <ScreenCard key={index} {...item} />;
            else return null;
          })}
        </div>
      </div>
    </section>
  );
};

const ScreenCard = ({ title, contentOne, contentTwo, image, pop }) => {
  const [load, setLoad] = useState(false);
  return (
    <div className="__card_interphase">
      <div>
        <h3>{title}</h3>
        <p className="__content_one">{contentOne}</p>
        <p className="__content_one">{contentTwo}</p>
        <a className="__link" href="/">
          <span>Read more about Statement Pages</span>
          <AiOutlineArrowRight id="icon" />
        </a>
      </div>
      <div className="__image_section">
        <figure>
          <img className="__phone" src={image} alt="" onLoad={() => setLoad(true)} />
          {load && (
            <div className="__pop">
              <img className="__badge_image" src={pop} alt="" />
            </div>
          )}
        </figure>
      </div>
    </div>
  );
};

export default Management;
