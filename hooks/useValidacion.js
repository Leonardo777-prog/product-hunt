import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valor, setValor] = useState(stateInicial);
  const [error, setError] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  useEffect(() => {
    if (submitForm) {
      const noError = Object.keys(error).length === 0;

      if (noError) {
        fn(); //fn iguala la funcion de el componenete
      }
      setSubmitForm(false);
    }
  }, [error]);

  // funcion que se ejecuta cuando el user escribe
  const handleChange = (e) => {
    setValor({ ...valor, [e.target.name]: e.target.value });
  };

  // funcion que se ejecuta cuando el user hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valor);
    setError(erroresValidacion);
    setSubmitForm(true);
  };

  const handleBlur = () => {
    const erroresValidacion = validar(valor);
    setError(erroresValidacion);
  };
  return {
    valor,
    error,
    submitForm,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidacion;
