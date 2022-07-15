import ListadoComponentes from "./components/ListadoComponentes/ListadoComponentes"
import {Routes,Route} from 'react-router-dom'

const Container = () => {
  return (
    <div className="main">
      <Routes>
      <Route path="/" element={<ListadoComponentes/>}/>
      <Route path="/opciones/:gen" element={<ListadoComponentes/>}/>


      </Routes>

    </div>
  )
}

export default Container