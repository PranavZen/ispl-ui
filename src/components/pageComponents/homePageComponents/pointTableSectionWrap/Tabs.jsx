import React, { useState } from "react";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };
  return (
    <div className="mianTabsWrap">
      
      <div className="sectionWrap">
        <SectionTitle titleText="What Are You Looking For?" />

        <div className="tabs">
          {children.map((child) => {
            const { label, spanImg } = child.props;
            return (
              <button
                key={label}
                className={`tab ${activeTab === label ? "active" : ""}`}
                onClick={() => handleTabClick(label)}
              >
                <span dangerouslySetInnerHTML={{ __html: spanImg }} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export default Tabs;
