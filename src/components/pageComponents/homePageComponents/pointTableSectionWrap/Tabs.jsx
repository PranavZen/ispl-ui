import React, { useState } from "react";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";

function Tabs({ children }) {
  // Ensure children is an array
  const tabsArray = React.Children.toArray(children);

  // Set initial activeTab if there are children, otherwise set to null
  const [activeTab, setActiveTab] = useState(tabsArray.length > 0 ? tabsArray[0].props.label : null);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="mianTabsWrap">
      <div className="sectionWrap">
        <SectionTitle titleText="What Are You Looking For?" />

        <div className="tabs">
          {tabsArray.map((child) => {
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
        {tabsArray.map((child) => {
          if (child.props.label !== activeTab) return null;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export default Tabs;
