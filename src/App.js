import { BrowserRouter } from "react-router-dom"
import Container from '../src/Container'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Container/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App