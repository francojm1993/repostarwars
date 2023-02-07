import React from "react";
import "../../css/Cards.css";
const CharapterCard = ({ item, abrirModal }) => {
  return (
    <div className="mb-5">
      <div className="card" style={{ minWidth: "200px" }}>
        <div className="card-body">
          <img src="/img/default.jpg" alt="" className="img-card" />
          <h5 className="card-title">{item.name}</h5>
          <hr />
          <p>Home World: {item.homeworld}</p>
          <p>Gender: {item.gender}</p>
          <button
            className="btn btn-info"
            onClick={(e) => abrirModal(e, item.url)}
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharapterCard;
