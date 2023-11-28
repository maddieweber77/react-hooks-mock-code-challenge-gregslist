import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {
  let [listings, setListings] = useState([])

  const [searchTerm, setSearch] =useState("")

  const [filterLocation, setFilterLocation] = useState(true)

  const [sortedListings, setSortedListings] = useState([]);

  function onSearch(term) {
    setSearch(term);
  }


  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then((r)=> r.json())
    .then((listings)=> setListings(listings))
  })

  function onFilter() {
    setFilterLocation(!filterLocation);
  
    let sortedListings = [...listings];  // Create a new array to avoid mutating the state directly
  
    sortedListings.sort((a, b) => {
      if (filterLocation) {
        return a.location.localeCompare(b.location);
      } else {
        return b.location.localeCompare(a.location);
      }
    });
  
    setListings(sortedListings);  // Update the state with the new sorted array
  
    console.log(sortedListings);
  
    return sortedListings;
  }
  
  function hasSortedListings() {
    return Array.isArray(sortedListings) && sortedListings.length > 0;
  }

  hasSortedListings();



  return (
    <div className="app">
      
      <Header listings={listings} onSearch={onSearch} searchTerm={searchTerm} onFilter={onFilter} hasSortedListings={hasSortedListings}/>
      
      <ListingsContainer sortedListings={sortedListings} listings={listings} onSearch={onSearch} searchTerm={searchTerm} onFilter={onFilter} filterLocation={filterLocation} hasSortedListings={hasSortedListings}/>

    </div>
  );
}

export default App;
