import { IoSearch, IoClose  } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFeature = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/searchResult?q=${trimmedQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    navigate("/trending"); // automatically navigate to default trending
  };

  return (
    <div className="m-auto my-2 flex w-4/5 items-center justify-between gap-2 rounded-sm border p-1 px-3 shadow-sm md:w-2/5">
      <input
        type="text"
        placeholder="Search videos..."
        className="w-full bg-black text-white outline-none px-2 py-1 rounded-l-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {/* Clear button */}
      {searchQuery && (
        <button
          onClick={handleClear}
          className=" text-white text-xl cursor-pointer"
          title="Clear"
        >
          <IoClose />
        </button>
      )}
      <button
        onClick={handleSearch}
        className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-r-md"
      >
        <IoSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchFeature;
