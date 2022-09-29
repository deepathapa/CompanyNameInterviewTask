import React, { useEffect, useState } from 'react';

const Item = ({ productItem }) => {
  return (
    <>
      {productItem.map((item, index) => {
        return <h2>Product ==== {item.title}</h2>;
      })}
    </>
  );
};
