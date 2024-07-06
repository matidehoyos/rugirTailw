import './App.css'
import About from './components/about/About'
import Alfombras from './components/alfombras/Alfombras'
import Alfombras2 from './components/alfombras2/Alfombras2'
import Categorias from './components/categorias/Categorias'
import Contact from './components/contact/Contact'
import Encargo from './components/encargo/Encargo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import NavBar from './components/navBar/NavBar'
import PreguntasFrecuentes from './components/preguntasFrec/PreguntasFrec'
import Ubicacion from './components/ubicacion/Ubicacion'

function App() { 


  return (
    <>
      <NavBar />
      <Header />
      <Alfombras2 />
      <Encargo />
      <Ubicacion />
      <Categorias />
      <About />
      <Contact />
      <PreguntasFrecuentes />
      <Footer />
    </>
  )
}

export default App
