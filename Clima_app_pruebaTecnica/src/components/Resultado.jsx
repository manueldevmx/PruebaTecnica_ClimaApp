import React from "react";
import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  console.log(resultado);

  const { name, main, weather } = resultado;

  //Grados Kelvin
  const gKelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es: </h2>
    
      <p>{parseInt(main.temp - gKelvin)}</p>
      <p>{weather[0].main}</p>
      <div className="temp_min_max">
        <p>Mín: {parseInt(main.temp_min - gKelvin)}</p>
        <p>Max: {parseInt(main.temp_max - gKelvin)}</p>
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default Resultado;
