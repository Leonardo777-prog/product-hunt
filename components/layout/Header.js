import React from "react";
import Link from "next/link";
import Buscador from "../ui/Buscador";
import Navegacion from "../layout/Navegacion";
import { ContenedorHeader, Logo, Boton } from "../../shared/styles";

const Header = () => {
  return (
    <header>
      <ContenedorHeader>
        <div>
          <Link href="/">
            <Logo>p</Logo>
          </Link>
          <Buscador />
          <Navegacion />
        </div>
        <div>
          <p>Hola Leo</p>
          <Boton type="button" bgColor={true}>
            Cerrar Sesion
          </Boton>
          <Link href="/">
            <Boton>Login</Boton>
          </Link>
          <Link href="/">
            <Boton bgColor={true}>Registrarse</Boton>
          </Link>
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
