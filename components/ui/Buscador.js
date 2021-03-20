import { css } from "@emotion/react";
import React from "react";
import { InputText, InputSubmit } from "../../shared/styles";
const Buscador = () => {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText type="text" placeholder="Buscar Productos" />
      <InputSubmit type="submit">Buscar</InputSubmit>
    </form>
  );
};

export default Buscador;
