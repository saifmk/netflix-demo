import React from 'react'
import {originals,action} from './urls'
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  
  return (
  <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url ={originals} title='Netflix Originals'/>
    <Rowpost url={action} title='Action' isSmall/>
  </div>
  );
}
export default App;
