import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import chillHop from "../utils";
import SearchResult from "./searchResult";
const Nav = ({
  libraryStatus,
  setLibraryStatus,
  currentSong,
  setCurrentSong,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleClick = async (song) => {
    await setCurrentSong(song); // Use song instead of selectedSong
    setSearchResult([])
    setSearchQuery("")

  };
  const searchInLibrary = (searchQuery) => {
    if (!searchQuery) {
      return [];
    } else {
      const library = chillHop();
      const filteredList = library.filter((song) =>
        song.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredList) {
        return filteredList;
      } else {
        return [];
      }
    }
  };
  useEffect(() => {
    //Will be called when search state changed.
    const result = searchInLibrary(searchQuery);
    setSearchResult(result);
  }, [searchQuery]);
  return (
    <nav className="nav-bar">
      <div className="logo">MelodyMix</div>
      <div className="searchBar">
        <input
          type="search"
          placeholder="E.g: Guns N Roses - Nightrain"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchResult && searchResult.length > 0 && (
          <SearchResult results={searchResult} handleClick={handleClick} />
        )}
      </div>
      <div className="btn">
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
