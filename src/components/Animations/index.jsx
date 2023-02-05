import React, { useState } from "react";
import "./styles.scss";

export const Animations = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="acordeon">
      <div className={`bloque ${open ? "activo" : ""}`}>
        <h2 onClick={() => setOpen(!open)} className="h2">
          Titular
        </h2>
        <p className="contenido">Soy el contenido 1</p>
      </div>
      {/* <div className="bloque">
            <h2 className="h2">Titular</h2>
            <p className="contenido">Soy el contenido 2</p>
        </div> */}
    </div>
  );
};
