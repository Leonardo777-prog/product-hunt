import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import {
  Formulario,
  Campo,
  BotonEnviar,
  HedingPage,
  Alerta,
} from "../shared/styles";

import Router from "next/router";

import firebase from "../firebase";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validacionCrearCuenta";

const CrearCuenta = () => {
  const [errorAuth, setErrorAuth] = useState(false);
  const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: "",
  };
  const {
    valor,
    error,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
  const { nombre, email, password } = valor;
  async function crearCuenta() {
    try {
      await firebase.registerUser(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el Usuario", error.message);
      setErrorAuth(error.message);
    }
  }
  return (
    <div>
      <Layout>
        <>
          <HedingPage>Crear Cuenta</HedingPage>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {error.nombre && <Alerta bgError={true}>{error.nombre}</Alerta>}
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {error.email && <Alerta bgError={true}>{error.email}</Alerta>}
            <Campo>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Contraseña"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {error.password && <Alerta bgError={true}>{error.password}</Alerta>}
            {errorAuth && <Alerta bgError={true}>{errorAuth}</Alerta>}
            <BotonEnviar type="submit">Crear Cuenta</BotonEnviar>
          </Formulario>
        </>
      </Layout>
    </div>
  );
};
export default CrearCuenta;
