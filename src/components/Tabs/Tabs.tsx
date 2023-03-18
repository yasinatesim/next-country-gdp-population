import React, { useState } from 'react';

import cx from 'classnames';

type Tab = {
  label: string;
  value: string;
  component: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  selectedTab?: string;
  // eslint-disable-next-line no-unused-vars
  onTabChange?: (tab: string) => void;
};

import css from './Tabs.module.scss';

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(selectedTab || tabs[0].value);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange && onTabChange(tab);
  };
  return (
    <div className={css.tabs}>
      <div className={css.tabsNav}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cx(css.tab, { [css.active]: tab.value === activeTab })}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={css.content}> {tabs.find((tab) => tab.value === activeTab)?.component}</div>
    </div>
  );
};

export default Tabs;
