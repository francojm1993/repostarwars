import React from "react";

const PlanetCard = ({ item }) => {
  return (
    <div key={item.id} className="col mb-5">
      <div className="card" style={{ minWidth: "200px" }}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <hr />
          <p>Population: {item.population}</p>
          <p>Climate: {item.climate}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
