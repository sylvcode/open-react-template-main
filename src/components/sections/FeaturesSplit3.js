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

const FeaturesSplit3 = ({
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
    title: "Autopilot - from idea to production",

    paragraph: "How to work with us",
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

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className=" mt-0 mb-12">Implementation</h3>
                <p className="m-0">
                  We designed the platform and put into place the infrastructure
                  components to cope with the data. The cloud infrastructure was
                  deployed using terraform and helm. The microservices were
                  deployed using the GitOps pattern with fluxcd and kustomize.
                  Performance tests were written to validate the scalability of
                  the platform and individual components. Continuous monitoring
                  and logging were designed on top of open source solutions with
                  a focus on automation (security updates, version updates,
                  auto-scaling resources).
                </p>
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Results</h3>
                <p className="m-0">
                  Developers were quicker to release features. And the business
                  was able to onboard 40.000 devices within a month of the
                  initial release. KPIs that we used to track our results
                  included: Deployment frequency Lead time Number of defects
                  found in production Meantime to repair Meantime between
                  failures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit3.propTypes = propTypes;
FeaturesSplit3.defaultProps = defaultProps;

export default FeaturesSplit3;
