import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects.js';

function App() {
  return (
  <>
   <Router>
     <Navbar />
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
        <Route path="/rogueline" render={() => (window.open("https://itch.io/jam/gmtk-2019/rate/463304", "_blank")) 
          (window.location="/projects")}/>
        <Route path="/alexasl" render={() => (window.open("https://github.com/jimmybliu/Sign-Language", "_blank")) 
          (window.location="/projects")}/>
        <Route path="/battleship" render={() => (window.open("https://github.com/jimmybliu/BattleShip", "_blank")) 
          (window.location="/projects")}/>
        <Route path="/website" render={() => (window.open("https://github.com/jimmybliu/personal-website", "_blank")) 
          (window.location="/projects")}/>
        

     </Switch>
   </Router>
  </>
  );
}

export default App;
