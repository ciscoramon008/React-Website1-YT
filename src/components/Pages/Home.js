import React, { useState } from 'react'
import HeroComp from '../HeroComponent/HeroComp';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Info from '../Info/Info'
import { Section1, Section2, Section3, Section4 } from '../Info/Data';
import Services from '../Services/Services';


const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <HeroComp />
      <Info {...Section1} />
      <Info {...Section2} />
      <Services />
      <Info {...Section3} />
      <Info {...Section4} />
    </>
  )
}

export default Home