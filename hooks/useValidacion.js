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
  }, []);
  return <h1>kdskjd</h1>;
};

export default useValidacion;
