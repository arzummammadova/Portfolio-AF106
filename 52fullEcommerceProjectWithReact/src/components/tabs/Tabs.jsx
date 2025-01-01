import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab-1'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <div>
      <section id="tab">
        <div className="container">
          <ul className="tabs">
            <li
              className={`tab-link ${activeTab === 'tab-1' ? 'current' : ''}`}
              data-tab="tab-1"
              onClick={() => handleTabClick('tab-1')}
            >
              Product Description
            </li>
            <li
              className={`tab-link ${activeTab === 'tab-2' ? 'current' : ''}`}
              data-tab="tab-2"
              onClick={() => handleTabClick('tab-2')}
            >
              Review
            </li>
          </ul>

          <div
            id="tab-1"
            className={`tab-content ${activeTab === 'tab-1' ? 'current' : ''}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          
          <div
            id="tab-2"
            className={`tab-content ${activeTab === 'tab-2' ? 'current' : ''}`}
          >
            Yenilenecek....
          </div>
        </div>
      </section>

      <section id="featuredproducts">
        <div className="container">
        
        </div>
      </section>
    </div>
  );
};

export default Tabs;
