import './App.css'
import About from './components/about/About'
import Alfombras2 from './components/alfombras2/Alfombras2'
import Contact from './components/contact/Contact'
import Encargo from './components/encargo/Encargo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PreguntasFrecuentes from './components/preguntasFrec/PreguntasFrec'
import Ubicacion from './components/ubicacion/Ubicacion'

function App() { 


  return (
    <>
      <Header />
      <Alfombras2 />
      <Encargo />
      <Ubicacion />
      <Contact />
      <About />
      <PreguntasFrecuentes />
      <Footer />
    </>
  )
}

export default App
