import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onSearch, searchTerm, onFilter, filterLocation, hasSortedListings }) {

  let updatedListings = listings.filter
  (listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  function clickDeleteItem(deletedItem) {
    let updatedListings = listings.filter((listing) => listing.id !== deletedItem.id);
    renderListings(updatedListings);
  }

  function renderListings() {

    
    
    // Use map and return the JSX for each listing
    return updatedListings.map((listing) => (
      <ListingCard
        key={listing.id} // Add a key prop for each item in the list
        id={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
        handleDeleteItem={clickDeleteItem}
      />
    ));
  }
  
  return (
    <main>
      <ul className="cards">
        {renderListings(updatedListings)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
