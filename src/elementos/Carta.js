import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import atras from '../imagenes/images.png';
import "../App.css"


function Carta({name,num,frontface }) {
  const[isFlipped, setIsFlipped]=useState(false);
  const handleclick = e =>{
    setIsFlipped(!isFlipped);
  }

  return (

    <div className='carta' >
      <ReactCardFlip isFlipped ={isFlipped} > 
      <div>
        <img className='card-ima' src={atras} alt="atras" onClick={handleclick}/>
      </div>
        <div><img className='card-ima'src={frontface} alt ="frente" onClick={handleclick}/>
      </div>
        
      </ReactCardFlip>
     
   </div>
  )

}


export default Carta