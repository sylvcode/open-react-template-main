import React from "react";
import "./Icons.css";
import { Icon } from "@iconify/react";
import SectionHeader from "../../sections/partials/SectionHeader";

const sectionHeader = {
  title: "Our Technology Playground",
  text: "",
  paragraph: "",
};

function Icons() {
  return (
    <div className="partner-area">
      <div class="container">
        <div className="section-title">
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="bar"></div>
        </div>
        <div className="partner-slides owl-carousel owl-theme">
          <div className="icon">
            <Icon icon="logos:aws" width="50" />
          </div>

          <div className="icon">
            <Icon icon="logos:figma" width="40" />
          </div>

          <div className="icon">
            <Icon icon="logos:react" width="50" />
          </div>

          <div className="icon">
            <Icon icon="logos:kubernetes" width="50" />
          </div>

          <div className="icon">
            <Icon icon="vscode-icons:file-type-azure" width="50" />
          </div>

          <div className="icon">
            <Icon icon="vscode-icons:file-type-python" width="50" />
          </div>
          <div className="icon">
            <Icon icon="logos:mongodb" width="50" />
          </div>
          <div className="icon">
            <Icon icon="logos:helm" width="50" />
          </div>
          <div className="icon">
            <Icon icon="bxl:spring-boot" width="50" />
          </div>
          <div className="icon">
            <Icon icon="logos:nodejs" width="50" />
          </div>
          <div className="icon">
            <Icon icon="logos:graphql" width="50" />
          </div>
          <div className="icon">
            <Icon icon="logos:terraform-icon" width="50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
