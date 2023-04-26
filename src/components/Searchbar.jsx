import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate()

  const [searchName, setSearchName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchName}`)

  }
  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-field" className="sr-only text-white">
        Search All SOngs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="h-6 w-6" />
        <input
          type="searchName"
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
