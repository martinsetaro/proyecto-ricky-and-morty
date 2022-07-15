import './listado.scss'
import { useEffect,useState, } from 'react'
import ItemCards from '../ItemCards/ItemCards'
import rick from '../../assets/img/virus.gif'
import '../Filters/filtros.scss'






const ListadoComponentes = () => {

  const [loader,setLoader] = useState(true)
  const [characters,setCharacters] = useState([])

 

 useEffect(()=>{
     
  fetch('https://rickandmortyapi.com/api/character/')
  .then(res=>res.json())
  .then(data=>{

    setCharacters(data.results)
    console.log(data.results)

    
  }
  )
  .catch(err=>console.log(err))


 },[])

 setTimeout(()=>{

  setLoader(false)

},5000)



const selector =(e)=>{

  
}













  return (
    loader ? <div className='loading'><img src={rick} alt="img"/></div>:
    
    <div className='listadoMain'>
      <h2>Tarjetas Personajes</h2>
      <div className="filtros">
        <select onChange={selector} className ='selecctor'>
           <option value="Male">Hombre</option>
            <option value="Female">Mujer</option>
           
        </select>
        
    </div>
      <div className='contenedor_cards'>
   {characters.map(character=>{
      return <ItemCards key={character.id} character={character}/>
   }  )}


</div>
    </div>
  )
}

export default ListadoComponentes