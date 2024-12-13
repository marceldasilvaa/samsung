// pages
import { useNavigate } from "react-router-dom";

// icon
import { FaMagnifyingGlass } from "react-icons/fa6";

// hooks
import { useState } from "react";

// styles
import "./Search.css"

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const tinyQuery = query.toLowerCase();

    navigate("/" + tinyQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar"
        required
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export default Search;
