import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

import { Icon } from "@iconify/react";
import "../layout/styles.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const WorkwWithUs = ({
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
    title: "How to work with us",

    paragraph: "Autopilot - from idea to production",
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
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Focusing on Outcomes that matter
                </div>

                <p className="m-0">
                  Rather than issuing detailed and prescriptive rules and
                  requirements for every feature. Our customers provide us with
                  a set of high-level outcomes. Together we define (impact
                  mapping) metrics to measure the outcomes. Finally we start
                  building and schedule weekly meetings where we discuss the
                  metrics.
                </p>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Benefits
                </div>
                <p className="m-0">
                  Less project management overhead Faster development cycles
                  Truly adaptable and flexible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkwWithUs.propTypes = propTypes;
WorkwWithUs.defaultProps = defaultProps;

export default WorkwWithUs;
