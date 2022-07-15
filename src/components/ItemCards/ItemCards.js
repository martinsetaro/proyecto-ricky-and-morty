import '../ListadoComponentes/listado.scss'






const ItemCards = (character) => {
   
   const {name, image ,gender,species,status,} = character.character
   const {name:nombre} = character.character.location
   const {name:nombres} = character.character.origin

   


 
   
  return (     
    
    <div className='cards'>
        <img src={image} alt={name}/>
        <h2>Nombre: {name}</h2>
        <h2>Genero: {gender}</h2>
        <h2>Especie: {species}</h2>
        <h2>Estado: {status}</h2>
        <h2>Lugar: {nombre}</h2>
        <h2>Origen: {nombres}</h2>
</div>
  )
}

export default ItemCards