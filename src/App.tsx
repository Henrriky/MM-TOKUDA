import './App.css';

import Home from './components/Home/Index';
import About from './components/About/Index';
import Services from './components/Services/Index';
import Difference from './components/Difference/Index';
import Informations from './components/Informations/Index';
import Footer from './components/Footer/Index';

function App() {
  return (
    <div className="App">
        <Home/>
        <main>
        <Services/>
        <About/>
        <Difference/>
        <Informations/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
