import React,{useState,useEffect} from 'react';
import './App.css';
import Carta from './elementos/Carta'

import {cartitas} from './iconos';

function App() {
  const [cartas, setCartas] = useState([]);
  const [c1, setC1] = useState({});
  const [c2, setC2]= useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  
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


  useEffect (()=>{
    checkForMatch (); 
  },[c2]);

  const flipCard = (name, num)=> {
    if (c1.name === name && c1.num === num){
      return 0;
    }

    if(!c1.name){
      setC1({ name, num });
    }

    else if (!c2.name){
      setC2({ name, num });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (c1.name && c2.name) {
      const match = c1.name === c2.name;
      match ? disableCards() : unflipCards();
    }
  }

  const disableCards = () => {
    setDisabledCards([c1.num, c2.num]);
    rcartas();
  };

  const unflipCards = () => {
    setUnflippedCards([c1.num, c2.num]);
    rcartas();
  };
    

  const rcartas = () => {
    setC1  ({});
    setC1 ({});
  }

  return (
    <div className="App">
      <div className="marco">
        {
          cartas.map((carta,index) =>(
            <Carta 
            name={carta.princess}
            num_carta={index}
            frontface={carta.src}
            flipCard={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
            
            />

          ))
        }

      </div>
    </div>
    );
}

export default App;
