import React from "react";

const NaveCard = ({ item }) => {
  return (
    <div key={item.id} className="col mb-5">
      <div className="card" style={{ minWidth: "200px" }}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <hr />
          <p>Model: {item.model}</p>
          <p>cost: {item.cost_in_credits}</p>
        </div>
      </div>
    </div>
  );
};

export default NaveCard;
