import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "42px" }}>
      {productsData && productsData.length > 0 ? (
        productsData.map((el, ind) => <p key={ind}>{el}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
