import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Component/Dashboard';
import Details from './Component/Details';
import NavbarComp from './Component/NavbarComp';
import ShoopingCard from './Component/ShoppingCard';

const App = () => {
  const [categories, setCategories] = useState("women's clothing");
  const [filterData, setFilterData] = useState('all');

  return (
    <div>
      <NavbarComp setCategories={setCategories} setFilterData={setFilterData} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashboard categories={categories} filterData={filterData} />
          }
        />

        <Route exact path="/productdetails" element={<Details />} />

        <Route path="/cart" element={<ShoopingCard />} />
      </Routes>
    </div>
  );
};

export default App;
