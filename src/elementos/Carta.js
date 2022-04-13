import React,{useState,useEffect} from 'react'
import ReactCardFlip from 'react-card-flip';
import atras from '../imagenes/images.png';
import "../App.css"


const Carta = ({name, num, frontface, flipCard, unflippedCards, disabledCards }) =>{
  const[isFlipped, setIsFlipped]=useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  
  useEffect (()=>{
    if (unflippedCards.includes (num)){
      setTimeout(()=> setIsFlipped(false),700);
    }

  },[unflippedCards])
 
  useEffect(() => {
    if (disabledCards.includes(num)) {
      setHasEvent(false);
    }
  }, [disabledCards])

  const handleclick = e =>{
    const value = flipCard(name,num);
      if(value !==0){
        setIsFlipped(!isFlipped);

      }
  
    
  }

  return (

    <div className='carta' >
      <ReactCardFlip isFlipped ={isFlipped} > 
      <div>
        <img className='card-ima' src={atras} alt="atras" onClick={ hasEvent? handleclick:null}/>
      </div>
        <div><img className='card-ima'src={frontface} alt ="frente" onClick={hasEvent? handleclick: null}/>
      </div>
        
      </ReactCardFlip>
     
   </div>
  )

}
  


export default Carta