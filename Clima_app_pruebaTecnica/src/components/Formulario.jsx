import { useState } from "react";
import useClima from "../hooks/useClima";


const Formulario = () => {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima} = useClima();
  const {ciudad, pais} = busqueda;

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios')
      return;
    }
    consultarClima(busqueda)
  }
  
    return (
    <div className="contenedor">
    {alerta && <p>{alerta}</p>}
      <form
        onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" 
          id="ciudad" 
          name="ciudad"
          onChange={datosBusqueda} 
          value={ciudad}
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
          id="pais" 
          name="pais"
          onChange={datosBusqueda} 
          value={pais}
          >
            <option value="">Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="EG">Egipto</option>
            <option value="RU">Rusia</option>
            <option value="CN">China</option>
            <option value="CA">Canada</option>
            <option value="BR">Brasil</option>
            <option value="GB">Reino Unido</option>
            <option value="JP">Japón</option>
            <option value="IT">Italia</option>
            <option value="FR">Francia</option>
            <option value="EE">Estonia</option>
            <option value="IQ">Irak</option>
            <option value="IL">Israel</option>
            <option value="NL">Paises Bajos</option>
            <option value="NG">Nigeria</option>
            <option value="UA">Ucrania</option>
          </select>
        </div>
        <input 
            type="submit"
            value='Consultar Clima'
        />
      </form>
    </div>
  );
};

export default Formulario;
