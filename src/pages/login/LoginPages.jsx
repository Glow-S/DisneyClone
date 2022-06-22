import React from "react";
import "../../style/components/pages/LoginPages.css";

function LoginPages() {
  return (
    <div className="contenedor-principal-login">
      <img
        className="logoDisney"
        src="https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png"
        alt=""
      />
      <div className="contenedor-login">
        <form className="contenedor-ingresar" action="">
          <h3 className="txt-is">Inicia sesión con tu correo</h3>
          <input
            className="ingreso text-ingreso"
            type="email"
            placeholder="Correo electrónico"
          />
        </form>
        <a
          href="#"
        >
          <button className="buton-continuar pointer t-color-lgb">
            <label className="text-continuar text-ingreso pointer ">CONTINUAR</label>
          </button>
        </a>
        <h4 className="txt-links mt-5">
          ¿Primera vez en Disney+?
          <a class="txt-links white hv-txt" href="#">
            Suscribirse
          </a>
        </h4>
      </div>
    </div>
  );
}

export default LoginPages;
