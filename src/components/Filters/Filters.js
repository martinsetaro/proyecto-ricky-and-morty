import '../Filters/filtros.scss'




const Filters = () => {

  


  return (

    <div className="filtros">
        <select className ='selecctor'>
            <option value="gender">Genero</option>
            <option value="species">Especie</option>
            <option value="status">Estado</option>
            <option value="origen">Origen</option>
        </select>
        
    </div>
  )
}

export default Filters