import React, { useEffect, useState } from "react";
import CharapterCard from "../components/accesories/CharapterCard";
import ModalCharapter from "../components/charapterRoute/ModalCharapter";
import "../css/CharaptersRoute.css";

const CharaptersRoute = () => {
  const [url, setUrl] = useState("");

  /**  ABRIR MODAL   **/
  //Esta función se para a la card y al hacer click en un botón se pasa el link del personaje.
  const abrirModal = (e, data) => {
    e.preventDefault();
    setUrl(data);
  };

  //Limpia el state de la url por lo que se cerra el modal.
  //Se debe pasar al modal y crear un botón para cerrarlo.
  /**  CERRAR MODAL   **/
  const cerrarModal = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const [personaje, setPersonaje] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((response) => setPersonaje(response.results));
  }, []);
  return (
    <div className="container-Charapter_route">
      <h1>Personajes </h1>
      <section className="container-character_cards">
        {personaje.length !== 0 && (
          <>
            {personaje.map((e) => (
              <CharapterCard
                key={`${Date.now()}-${e.name}`}
                item={e}
                abrirModal={abrirModal}
              />
            ))}
          </>
        )}
      </section>

      {/** ---- RENDERIZADO MODAL ------**/}
      {url && <ModalCharapter cerrarModal={cerrarModal} url={url} />}
    </div>
  );
};

export default CharaptersRoute;
