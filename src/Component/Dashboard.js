import React from 'react';
import Banner from './Banner';

import ProductItem from './Categories/ProductItem';

const Dashboard = ({ categories, filterData }) => {
  return (
    <div>
      {console.log('Dash ' + categories + ' Filter ' + filterData)}
      <Banner />
      <ProductItem categories={categories} filterData={filterData} />
    </div>
  );
};

export default Dashboard;
