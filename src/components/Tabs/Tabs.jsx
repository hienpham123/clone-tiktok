import React, { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            <div className="tab-title">{tab.title}</div>
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
