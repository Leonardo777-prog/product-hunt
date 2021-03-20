import React from "react";
import Link from "next/link";
import Buscador from "../ui/Buscador";
import Navegacion from "../layout/Navegacion";
import { ContenedorHeader, Logo, Boton, HeaderSite } from "../../shared/styles";
import { css } from "@emotion/react";

const Header = () => {
  const user = false;
  return (
    <HeaderSite>
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>p</Logo>
          </Link>
          <Buscador />
          <Navegacion />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola Leo
              </p>
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
