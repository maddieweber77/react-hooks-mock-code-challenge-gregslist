import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDeleteItem}) {

  const [star, setStar] = useState(false)

  function renderStar() {
    return setStar(!star)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((r)=> r.json())
    .then((item) => handleDeleteItem(item))
  }

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {star ? (
          <button className="emoji-button favorite active" onClick={renderStar}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={renderStar}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
