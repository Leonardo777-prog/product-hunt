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
