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

const WorkwWithUs2 = ({
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

    paragraph: "Augment your team with senior engineers",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content" />
        <div className={splitClasses}>
          <div className="split-item">
            <div
              className="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item"
            >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Team Work
              </div>

              <p className="m-0">
                Quickly fill the resource gap of your in-house team with one or
                multiple of our senior engineers. Our engineers provide the
                speed, expertise & flexibility your team needs to scale up at
                any stage of the product development.
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
                Fast scale up knowledge sharing predictable costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkwWithUs2.propTypes = propTypes;
WorkwWithUs2.defaultProps = defaultProps;

export default WorkwWithUs2;
