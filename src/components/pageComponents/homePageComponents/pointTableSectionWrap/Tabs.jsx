import React, { useState, useEffect } from "react";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import { useLocation } from "react-router-dom";

function Tabs({ children }) {
  // Ensure children is an array
  const tabsArray = React.Children.toArray(children);
  // console.log("tabsArray " , tabsArray)
  const location = useLocation();

  // Set initial activeTab if there are children, otherwise set to null
  const [activeTab, setActiveTab] = useState(tabsArray.length > 0 ? tabsArray[0].props.label : null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      if (hash === 'statsId' && tabsArray[2]) {
        // Set the active tab to the third tab if the hash is 'statsId'
        setActiveTab(tabsArray[2].props.label);
      } else {
        // Set the active tab based on the hash
        const tabToActivate = tabsArray.find(tab => tab.props.label === hash);
        if (tabToActivate) {
          setActiveTab(hash);
        }
      }
    }
  }, [location.hash, tabsArray]);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'statsId') {
      window.scrollTo({
        top: 200,
        behavior: 'smooth'
      });
    }
  }, [location.hash]);

  const handleTabClick = (label) => {
    setActiveTab(label);
    window.location.hash = label;
  };

  return (
    <div className="mianTabsWrap">
      <div className="sectionWrap">
        <SectionTitle titleText="What Are You Looking For?" />

        <div className="tabs">
          {tabsArray.map((child, index) => {
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
