import React, { useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import CountryList from '@/components/CountryCard/CountryCard';
import CountryChart from '@/components/CountryChart';
import CountryTable from '@/components/CountryTable';
import Tabs from '@/components/Tabs';

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState('chart');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const tabs = [
    {
      label: 'Chart',
      value: 'chart',
      component: <CountryChart />,
    },
    {
      label: 'Table',
      value: 'table',
      component: <CountryTable />,
    },
    {
      label: 'List',
      value: 'list',
      component: <CountryList />,
    },
  ];

  return (
    <>
      <Head>
        <title>Country GDP Population</title>
        <meta name="description" content="Country GDP Population" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1>Country populations</h1>
        <Tabs tabs={tabs} selectedTab={selectedTab} onTabChange={handleTabChange} />
      </div>
    </>
  );
};

export default Home;
