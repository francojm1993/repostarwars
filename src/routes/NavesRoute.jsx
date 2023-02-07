import React, { useEffect, useState } from "react";
import NaveCard from "../components/accesories/NaveCard";
const NavesRoute = () => {
  const [naves, setNaves] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((response) => setNaves(response.results));
  }, []);
  return (
    <div>
      {naves.length !== 0 && (
        <>
          {naves.map((e) => (
            <NaveCard key={e.id} item={e} />
          ))}
        </>
      )}
    </div>
  );
};

export default NavesRoute;
