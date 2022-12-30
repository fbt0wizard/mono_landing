import React from "react";
import "../styles/trustee.css"

const Trustee = () => {
  return (
    <section className="__trustee_section">
      <h6>Trusted by</h6>
      <div className="__trustee_icon">
        <figure style={{marginRight: "10rem", marginBottom: "3rem"}}>
          <img
            src="https://monoassets.com/f/118499/x/bcea3ba6e5/carbon-logo.svg"
            alt=""
          />
        </figure>
        <figure style={{marginRight: "10rem", marginBottom: "3rem"}}>
            <img src="https://monoassets.com/f/118499/x/f1f896ba4f/image-13autochek.svg" alt="" />
        </figure>
        <figure style={{marginRight: "10rem", marginBottom: "3rem"}}>
            <img src="https://monoassets.com/f/118499/x/8147ab4312/group-45flw.svg" alt="" />
        </figure>
        <figure style={{marginRight: "10rem", marginBottom: "3rem"}}>
            <img src="https://monoassets.com/f/118499/x/b3ceb27492/image-10evolve_credit.svg" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Trustee;
