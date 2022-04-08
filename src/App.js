import React,{useState,useEffect} from 'react';
import './App.css';
import Carta from './elementos/Carta'
import {cartitas} from './iconos';

function App() {
  const [cartas, setCartas] = useState([]);
  
  const shuffleArray= (array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  useEffect(() =>  {
  shuffleArray(cartitas)
  setCartas(cartitas);
  },[])

  return (
    <div className="App">
      <div className="marco">
        {
          cartas.map((carta,index) =>(
            <Carta name={carta.princess}num_carta={index}frontface={carta.src}/>

          ))
        }

      </div>
    </div>
    );
}

export default App;
