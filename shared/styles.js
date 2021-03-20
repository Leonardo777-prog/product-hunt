import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyle = (
  <Global
    styles={css`
      :root {
        --gris: #3d3d3d;
        --gris2: #6f6f6f;
        --gris3: #e1e1e1;
        --naranja: #da552f;
      }

      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        font-size: 1.6rem;
        line-height: 1.5;
        font-family: "PT Sans", sans-serif;
      }

      h1,
      h2,
      h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
      }

      h1,
      h2 {
        font-family: "Roboto Slab", serif;
        font-weight: 700;
      }

      h3 {
        font-family: "PT Sans", sans-serif;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
      }

      .listado-productos {
        background-color: #f3f3f3;
      }
      .contenedor {
        max-width: 1200px;
        width: 95%;
        padding: 5rem 0;
        margin: 0 auto;
      }
      .bg-white {
        background-color: #fff;
      }
    `}
  />
);

export const HeaderSite = styled.header`
  border-bottom: 2px solid var(--gris3);
  padding: 1rem 0;
`;

export const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%inherit;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Boton = styled.a`
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-right: 1rem;
  background-color: ${(props) => (props.bgColor ? "#da552f" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000")};

  &:hover {
    cursor: pointer;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  max-width: 300px;
`;

export const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;
  outline: none;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const Formulario = styled.form`
  max-width: 60rem;
  width: 95%;
  margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 15rem;
    font-size: 1.8rem;
  }
  input {
    flex: 1;
    padding: 1rem;
  }
`;

export const BotonEnviar = styled.button`
  background-color: var(--naranja);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-family: "PT Sans", sans-serif;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const HedingPage = styled.h1`
  text-align: center;
  margin-top: 3rem;
`;
