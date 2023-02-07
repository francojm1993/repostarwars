import React from "react";
import "../../css/Modal.css";
const ModalCharapter = ({ cerrarModal, url }) => {
  return (
    <div className="container-modal">
      <section className="modal-info">
        {/**  BOTÓN PARA CERRAR EL MODAL **/}
        <button className="btn btn-danger" onClick={(e) => cerrarModal(e)}>
          Cerrar
        </button>
      </section>
    </div>
  );
};

export default ModalCharapter;
