import React from "react";
import SortAlphabetically from "./sortAlphabetically";
import Search from "./Search";


function Header({listings, onSearch, searchTerm}) {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} onSearch={onSearch} searchTerm={searchTerm}/>
      <SortAlphabetically listings={listings}/>
    </header>
  );
}

export default Header;
