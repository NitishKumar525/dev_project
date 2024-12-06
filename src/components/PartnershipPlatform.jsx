import React from "react";
import Cards from "./Cards";

function PartnershipPlatform() {
  return (
    <div className="text-black max-w-7xl mx-auto my-10">
      <p className="text-red-600 text-center my-8 text-xl">
        Our Partnership Platforms
      </p>
      <div className="text-5xl text-center text-bold">
        <h1 className="my-2">Connecting You With </h1>
        <h1>Leading Media Platforms</h1>
      </div>
      <div className="my-5 text-center tracking-wide text-[18px] text-gray-600 p-3">
        <p>
          We work with all major social media platforms to provide
          enterprise-tier
        </p>
        <p>solutions for businesses of all sizes. Forget about advertising</p>
        <p>limitations, restrictions and unsustainable campaigns.</p>
      </div>

      <Cards />
    </div>
  );
}

export default PartnershipPlatform;
