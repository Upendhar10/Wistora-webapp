import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { YT_SEARCH_API } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { cacheSearchResults } from "../reduxStore/SearchSlice";
import { Link } from "react-router-dom";

const SearchFeature = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchSuggestions = async () => {
      try {
        const response = await fetch(YT_SEARCH_API + searchQuery);
        if (!response.ok) {
          throw new Error("search error!");
        }
        const data = await response.json();
        // console.log(data[1]);

        setSearchSuggestions(data[1] || []);

        // update the cache when searchQuery changes
        dispatch(cacheSearchResults({ [searchQuery]: data[1] }));
      } catch (error) {
        console.error("Unable to Fetch Data", error);
      }
    };

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        fetchSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSuggestionClick = (s) => {
    setSearchQuery(s.target.value); // Update input field
    console.log(s.target.value);
  };

  return (
    <div className="relative m-auto my-2 flex w-4/5 items-center justify-between gap-2 rounded-full border p-1 px-3 shadow-sm md:w-3/5">
      <input
        type="text"
        placeholder="Search for your favorite videos . . . . . ."
        className="w-full border-r-2 px-2 py-1 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      <Link to={`/searchResult?q=${searchQuery}`}>
        <IoSearch className="cursor-pointer text-2xl" />
      </Link>
      {showSuggestions && (
        <div className="absolute left-3 top-11 z-10 m-auto w-[90%] bg-white p-1">
          {searchSuggestions.length > 0 &&
            searchSuggestions.map((s) => {
              return (
                <li
                  key={s}
                  onClick={(s) => handleSuggestionClick(s)}
                  className="flex-warp flex list-none items-center gap-5 p-2 hover:bg-gray-100"
                >
                  <IoSearch />
                  {s}
                </li>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchFeature;
