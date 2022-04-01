import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FeatureSplit2 from "../components/sections/FeatureSplit2";
import WorkwWithUs from "../components/sections/WorkwWithUs";
import WorkWithUs2 from "../components/sections/WorkWithUs2";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Technology from "../components/sections/Technology";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <FeatureSplit2
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <WorkwWithUs
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <WorkWithUs2
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Technology topDivider />
      <Testimonial topDivider />

      <Cta split />
    </>
  );
};

export default Home;
