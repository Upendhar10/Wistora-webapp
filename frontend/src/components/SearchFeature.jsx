import { IoSearch, IoClose } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFeature = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (trimmed) {
      navigate(`/searchResult?q=${trimmed}`);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    navigate("/trending");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="m-auto my-2 flex w-4/5 items-center justify-between gap-2 rounded-sm border p-1 px-3 shadow-sm md:w-2/5">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-black text-white outline-none px-2 py-1"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {searchQuery && (
        <IoClose
          onClick={handleClear}
          className="cursor-pointer text-xl"
        />
      )}

      <IoSearch
        onClick={handleSearch}
        className="cursor-pointer text-2xl"
      />
    </div>
  );
};

export default SearchFeature;




