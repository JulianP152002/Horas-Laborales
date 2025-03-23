import { useState } from "react";

import "./App.css";

function App() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horasExtras, setHorasExtras] = useState(0);
  const [nocturnas, setNocturnas] = useState(0);
  const [recargos, setRecargos] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();

    const entrada = parseInt(event.target[0].value);
    const entadamin = parseInt(event.target[1].value);
    const salida = parseInt(event.target[2].value);
    const salidaminu = parseInt(event.target[3].value);
    const operacion = salida - entrada;
    const Extras = horas - 8;
    const Nocturnas = salida - 21;
    setHoras(salida - entrada);
    setMinutos(entadamin + salidaminu);
    if (operacion > 8) {
      setHorasExtras(Extras);
      setNocturnas(Nocturnas);
    }
    if (operacion <= 8) {
      setRecargos(Nocturnas);
      setNocturnas(0);
      setHorasExtras(0);
    }
    if (operacion > 8) {
      setRecargos(0);
    }

    if (operacion > 8 && Nocturnas > 0) {
      setHorasExtras(Extras - Nocturnas);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Te amo</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Entrada</label>
          <div className="input-container">
            {/* <select type="select">
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select> */}
            <input type="number" /> :
            <input type="number" />
          </div>

          <label>Salida</label>
          <div className="input-container">
            {/* <select type="select">
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select> */}
            <input type="number" /> :
            <input type="number" />
          </div>

          <button className="button" type="submit">
            Enviar
          </button>
        </form>

        <h2>{`Van ${horas} horas ordinarias, con ${minutos} minutos`} </h2>
        <h2>{`Con ${recargos} recargos nocturnas`}</h2>
        <h2>{`Van ${horasExtras} horas extra, con ${minutos} minutos`}</h2>
        <h2>{`Van ${nocturnas} horas nocturnas`}</h2>
      </div>
    </>
  );
}

export default App;
