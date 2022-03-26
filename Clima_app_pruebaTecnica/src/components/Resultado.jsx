import React from "react";
import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  console.log(resultado);

  const { name, main, weather } = resultado;
  const [unit, setUnit] = React.useState("C");
  const [temp, setTemp] = React.useState(parseInt(main.temp - 273.15));
 

  const oppositeUnit = unit === "C" ? "F" : "C";

  const convert = () => {

    if (unit === "C") {
      const newT = (temp) * 1.8 + 32;
      setTemp(Math.round(newT));
      setUnit(oppositeUnit);
    }

    if (unit === "F") {
      const newT = ((temp - 32)*5) / 9;
      setTemp(Math.round(newT));
      setUnit(oppositeUnit);
    }
  };

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es: </h2>
    
      <p>{temp}{unit}</p>
      <p>{weather[0].main}</p>
      
      <button  
        className="btnChange"
        onClick={convert}>Cambiar escala</button>
      </div>
   
  );
};

export default Resultado;
