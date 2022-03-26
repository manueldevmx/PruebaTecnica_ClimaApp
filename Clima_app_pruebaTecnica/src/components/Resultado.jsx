import React from "react";
import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  console.log(resultado);

  const { name, main, weather } = resultado;

  //Grados Kelvin
  const gKelvin = 273.15;

  const converter =() => { 
    const gradosKelvin = parseInt(main.temp - 273.15)
    console.log(gradosKelvin)
  }

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es: </h2>
    
      <p> {converter.gradosKelvin} </p>
      <p>{weather[0].main}</p>
    
      <div>
     
      </div>
    </div>
  );
};

export default Resultado;
