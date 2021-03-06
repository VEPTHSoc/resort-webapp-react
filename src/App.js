import { Navbar } from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import { Hero } from "./components/Hero";
import {useState} from 'react'
import {Dropdown} from './components/Dropdown'
import { InfoSection } from "./components/InfoSection";
import { InfoData } from "./data/InfoData";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen = {isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
    </div>
  );
}

export default App;
