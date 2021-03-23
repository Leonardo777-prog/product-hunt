import React from "react";
import Link from "next/link";
import Buscador from "../ui/Buscador";
import Navegacion from "../layout/Navegacion";
import { ContenedorHeader, Logo, Boton, HeaderSite } from "../../shared/styles";

const Header = () => {
  const user = false;
  return (
    <HeaderSite>
      <ContenedorHeader>
        <div className="flex-items-center">
          <Link href="/">
            <Logo>p</Logo>
          </Link>
          <Buscador />
          <Navegacion />
        </div>
        <div className="flex-items-center">
          {user ? (
            <>
              <p className="mr-2">Hola Leo</p>
              <Boton bgColor={true}>Cerrar Sesion</Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor={true}>Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton bgColor={false}>Registrarse</Boton>
              </Link>
            </>
          )}
        </div>
      </ContenedorHeader>
    </HeaderSite>
  );
};

export default Header;
