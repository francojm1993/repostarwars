import React, { useEffect, useState } from "react";
import PlanetCard from "../components/accesories/PlanetCard";

const PlanetsRoute = () => {
  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((response) => setPlanet(response.results));
  }, []);
  return (
    <div>
      {planet.length !== 0 && (
        <>
          {planet.map((e) => (
            <PlanetCard key={e.id} item={e} />
          ))}
        </>
      )}
    </div>
  );
};

export default PlanetsRoute;
