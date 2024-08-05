import './App.css'
import About from './components/about/About'
import Alfombras2 from './components/alfombras2/Alfombras2'
import Alfombras3 from './components/alfombras3/Alfombras3'
import Contact from './components/contact/Contact'
import Encargo from './components/encargo/Encargo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import PreguntasFrecuentes from './components/preguntasFrec/PreguntasFrec'
import Ubicacion from './components/ubicacion/Ubicacion'
import Video from './components/video/Video'

function App() { 


  return (
    <>
      <NavBar />
      <Header />
      <Alfombras2 />
      <Encargo />
      <Alfombras3 />
      <Ubicacion />
      <Video />
      <Contact />
      <About />
      <PreguntasFrecuentes />
      <Footer />
    </>
  )
}

export default App
