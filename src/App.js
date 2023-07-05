import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Atrativos from "./components/Atrativos";
import Descricao from "./components/Descricao";
import Roteiros from "./components/Roteiros";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Galeria from "./components/Galeria";
import Contato from "./components/Contato";
import Footer from './components/Footer';
function App() {
  useEffect( ()=> {
    AOS.init({
        duration:2000,
    })
}, []);
  return (
    <div>
      <Menu />
      <Banner/>
      <Atrativos />
      <Descricao efeito='fade-top' />
      <Roteiros efeito='fade-top' />
      <Galeria />
      <Contato efeito='fade-top' />
      <Footer efeito='fade-top' />
    </div>
  );
}

export default App;
