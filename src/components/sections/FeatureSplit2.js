import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { Icon } from "@iconify/react";
import "../layout/styles.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeatureSplit2 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "",
    text: "Finance Platform",
    paragraph:
      "Our client a sharia-compliant digital bank. Decided to design a digital bank for people with international lifestyles who want to manage their money easily.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Challenges</h3>
                <p className="m-0">
                  Building a financial platform from the ground up in a
                  regulated area such as finance is never a simple task.
                  Building security and auditing into a fast-moving platform
                  made this project a challenge we couldn't skip.
                </p>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Technology</h3>
                <div className="icons">
                  <span>
                    {" "}
                    <Icon icon="vscode-icons:file-type-azure" />
                  </span>
                  <span>
                    <Icon icon="logos:kubernetes" />
                  </span>
                  <span>
                    <Icon icon="logos:helm" />
                  </span>
                  <span>
                    <Icon icon="logos:mongodb" />
                  </span>
                  <span>
                    <Icon icon="simple-icons:timescale" />
                  </span>
                  <span>
                    <Icon icon="bxl:spring-boot" />
                  </span>
                  <span>Monitoring/Logging + Instana</span>
                  <span>Kustomize</span>
                  <br></br>
                  <span>Timescale DB</span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className=" mt-0 mb-12">Implementation</h3>
                <p className="m-0">
                  We designed a serverless platform that was able to scale from
                  0 to unlimited from the beginning. Security was a first-class
                  citizen from the start and not an afterthought. By building
                  security into the platform from the start we were able to
                  comply with regulators without sacrificing feature delivery.
                  We relied heavily on SaaS providers for SIEM, logging, and
                  alerting. This allowed us to focus on the core product we were
                  building.
                </p>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Results</h3>
                <p className="m-0">
                  A fully functional and secure financial platform that had low
                  running costs with little ongoing maintenance costs. By
                  utilizing a serverless architecture we were able to remove
                  responsibilities from our daily work and were able to focus on
                  what mattered most. In just a little over six month, the
                  platform was ready for go-live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeatureSplit2.propTypes = propTypes;
FeatureSplit2.defaultProps = defaultProps;

export default FeatureSplit2;
