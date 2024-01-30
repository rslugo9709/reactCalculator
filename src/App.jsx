import { useState } from 'react';
import './App.css';
import Container from './components/container/container';
import { evaluate } from 'mathjs';

function App() {
  //definimos el estado
  const [input, sInput] = useState("");
  //ahora los metodos
  const limpiar = () =>{
    sInput("");
  }
  const calcular = () =>{
    sInput(evaluate(input));
  }
  const agregar = (valor) =>{
    sInput(input+valor)
    //console.log(input)
  }
  const borrar = () =>{
    sInput(input.slice(0, -1));
  }
  return (
    <div className='fondo'>
      <h1>My React calculator</h1>
      <Container borrar={borrar} limpiar={limpiar} input={input} calcular={calcular} agregar={agregar}/> 
    </div>
  )
}

export default App
