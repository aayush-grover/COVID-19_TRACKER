import React ,{Component} from 'react';
import Navbar1 from './components/Navbar1';
import Summary from './components/Summary';
import Homepage from './components/Homepage';
import Symptoms from './components/Symptoms';
import Globe from './components/Globe';
import Searchbycountry from './components/Searchbycountry';
import './App.css';
class App extends Component {
  render(){
  return (
   <React.Fragment>
     <Navbar1 />
     <Homepage />
     <Symptoms />
     <Summary />
     <Globe />
     <Searchbycountry />
   </React.Fragment>
  );
}
}

export default App;
