import React from "react";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, BotonEnviar, HedingPage } from "../shared/styles";

const CrearCuenta = () => {
  return (
    <div>
      <Layout>
        <>
          <HedingPage>Crear Cuenta</HedingPage>
          <Formulario>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
              />
            </Campo>

            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
              />
            </Campo>

            <Campo>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Contraseña"
                name="password"
              />
            </Campo>

            <BotonEnviar type="submit">Crear Cuenta</BotonEnviar>
          </Formulario>
        </>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
