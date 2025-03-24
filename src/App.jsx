import { useState } from "react";

import "./App.css";

function App() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horasExtras, setHorasExtras] = useState(0);
  const [nocturnas, setNocturnas] = useState(0);
  const [recargos, setRecargos] = useState(0);
  const [salida, setSalida] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setSalida(!salida);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const funcDosSalida = () => {
      const entrada = parseInt(event.target[0].value);
      const entadamin = parseInt(event.target[1].value);
      const salida = parseInt(event.target[2].value);
      const salidaminu = parseInt(event.target[3].value);

      const entrada2 = parseInt(event.target[5].value);
      const entadamin2 = parseInt(event.target[6].value);
      const salida2 = parseInt(event.target[7].value);
      const salidaminu2 = parseInt(event.target[8].value);
      console.log(entrada, salida, entrada2, salida2);
      const minutos = entadamin + salidaminu + entadamin2 + salidaminu2;
      const operacion = salida - entrada + salida2 - entrada2;

      const Nocturnas = salida2 - 21;
      const Extras = horas - 8;

      setHoras(operacion);
      setMinutos(minutos);
      setNocturnas(Nocturnas);

      if (operacion > 8 || Nocturnas > 0) {
        setHorasExtras(Extras);
        setNocturnas(Nocturnas);
      }

      if (operacion <= 8 && Nocturnas > 0) {
        setRecargos(Nocturnas);
      }
      if (operacion > 8 && Nocturnas > 0) {
        setHorasExtras(Extras - Nocturnas);
      }
      if (Nocturnas < 0) {
        setNocturnas(0);
      }
      if (operacion <= 8 && Nocturnas > 0) {
        setNocturnas(0);
      }
      if (operacion > 8 && Nocturnas > 0) {
        setRecargos(0);
      }
      if (operacion < 8) {
        setHorasExtras(0);
      }
    };
    const funcUnaSalida = () => {
      const entrada = parseInt(event.target[0].value);
      const entadamin = parseInt(event.target[1].value);
      const salida = parseInt(event.target[2].value);
      const salidaminu = parseInt(event.target[3].value);

      const minutos = entadamin + salidaminu;
      const operacion = salida - entrada;

      const Nocturnas = salida - 21;
      const Extras = horas - 8;
      console.log(Nocturnas);
      setHoras(operacion);
      setMinutos(minutos);
      setNocturnas(Nocturnas);

      if (operacion > 8 || Nocturnas > 0) {
        setHorasExtras(Extras);
        setNocturnas(Nocturnas);
      }

      if (operacion <= 8 && Nocturnas > 0) {
        setRecargos(Nocturnas);
      }
      if (operacion > 8 && Nocturnas > 0) {
        setHorasExtras(Extras - Nocturnas);
      }
      if (Nocturnas < 0) {
        setNocturnas(0);
      }
      if (operacion <= 8 && Nocturnas > 0) {
        setNocturnas(0);
      }
      if (operacion > 8 && Nocturnas > 0) {
        setRecargos(0);
      }
      if (operacion < 8) {
        setHorasExtras(0);
      }
    };
    salida ? funcDosSalida() : funcUnaSalida();
  };

  return (
    <>
      <div className="container">
        <h1>Te amo</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Entrada</label>
          <div className="input-container">
            <input type="number" /> :
            <input type="number" />
          </div>

          <label>Salida</label>
          <div className="input-container">
            <input type="number" /> :
            <input type="number" />
          </div>
          <hr />

          <button className="button2" onClick={handleClick}>
            {salida ? "Remover una salida" : "Dos Salidas"}
          </button>
          {salida && (
            <>
              <label>Entrada 2</label>
              <div className="input-container">
                <input type="number" /> :
                <input type="number" />
              </div>

              <label>Salida 2</label>
              <div className="input-container">
                <input type="number" /> :
                <input type="number" />
              </div>
            </>
          )}

          <button className="button" type="submit">
            Enviar
          </button>
        </form>

        <h2>{`Van ${horas} horas ordinarias, con ${minutos} minutos`} </h2>
        {recargos > 0 ? <h2>{`Con ${recargos} recargos nocturnas`}</h2> : ""}

        <h2>{`Van ${horasExtras} horas extra, con ${minutos} minutos`}</h2>
        <h2>{`Van ${nocturnas} horas nocturnas`}</h2>
      </div>
    </>
  );
}

export default App;
