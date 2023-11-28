import React from "react";
import SortAlpha from "./SortAlpha";
import Search from "./Search";


function Header({listings, onSearch, searchTerm, onFilter}) {
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
      <SortAlpha listings={listings} onFilter={onFilter}/>
    </header>
  );
}

export default Header;
