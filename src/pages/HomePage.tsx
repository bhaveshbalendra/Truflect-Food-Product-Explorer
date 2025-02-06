import React, { useState } from "react";
import { foodApi } from "../store/service/foodApi";

const Home: React.FC = () => {
  const [text, setText] = useState("");
  const { data: categories = [], isLoading: categoriesLoading } =
    foodApi.useGetAllCategoriesQuery();
  console.log(categories);
  return (
    <div>
      <h1>Food Product Explorer</h1>
      {/* <SearchBar onSearch={(query) => console.log(query)} /> Ensure SearchBar receives props */}

      <div>{text}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for food products..."
      />

      {categoriesLoading && <p>Loading categories...</p>}
    </div>
  );
};

export default Home;
