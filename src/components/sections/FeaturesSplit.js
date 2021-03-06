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

const FeaturesSplit = ({
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
    title: "Succes Stories",
    text: "IoT Platform",
    paragraph:
      "Our client is a leading company producing heating, cooling, and hot water products. Their mission is to enhance its products with digital services.",
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
                  The amount of data that needed to be persisted and processed
                  was a significant challenge. Coupled with the fact that the
                  platform and infrastructure wasn't in place made the project
                  an interesting challenge.
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
                  failures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
