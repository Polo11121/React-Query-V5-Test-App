import { useState } from "react";
import ProductList from "./ProductList";
import Search from "./Search";
import "./App.css";

export default function App() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Search defaultValue={filter} onSearch={setFilter} />
      <ProductList filter={filter} />
    </div>
  );
}
