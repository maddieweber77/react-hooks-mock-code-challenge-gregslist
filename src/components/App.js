import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {
  const [listings, setListings] = useState([])

  const [searchTerm, setSearch] =useState("")

  function onSearch(term) {
    setSearch(term);
  }

  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then((r)=> r.json())
    .then((listings)=> setListings(listings))
  })



  return (
    <div className="app">
      <Header listings={listings} onSearch={onSearch} searchTerm={searchTerm}/>
      <ListingsContainer listings={listings} onSearch={onSearch} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
