import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="w-screen relative flex flex-col max-w-full">
        <div className="relative flex flex-col w-screen h-80 bg-heavy-blue justify-center items-center overflow-hidden">
        <h1 className=" md:font-extrabold text-8xl text-yellow-style mb-10 z-10">
          TilburgTreks      
        </h1>
      <p className="text-white text-4xl z-10">Your Tilburgse travel guide</p>
            <img className="absolute opacity-20 z-0" src="src//assets/Skyline_of_Tilburg.jpg" />
      </div>
      <div className="relative flex flex-row w-screen h-64 bg-gray-100 justify-center items-center overflow-hidden">
        <p className="text-yellow-style md:font-bold text-9xl z-10">“</p>
        <p className="text-medium-blue md:font-meduim text-xl z-10">
        Tilburg is a dynamic Dutch city blending industrial heritage with 
        vibrant cultural offerings and a welcoming atmosphere.
        </p>
        <p className="text-yellow-style md:font-bold text-9xl z-10 mt-24">”</p>      
      </div>
      <div className="absolute flex flex-row w-screen h-24 bg-heavy-blue justify-center items-center z-20 top-[580px] overflow-hidden">
        <NavLink to="/" className="text-heavy-blue active:text-light-blue text-5xl md:font-bold mx-10 blueStroke">What to do?</NavLink>
        <NavLink to="whereToEat" className="text-heavy-blue active:text-light-blue text-5xl md:font-bold mx-10 blueStroke">Where to eat?</NavLink>
        <NavLink to="whereToStay" className="text-heavy-blue active:text-light-blue text-5xl md:font-bold mx-10 blueStroke">Where to stay?</NavLink>
      </div>
      <main>7
        <Outlet />
      </main>
      <div className="relative top-[300px] h-[100px] flex w-screen flex-col bg-gray-300 overflow-hidden">
        <p className="relative top-[30px] left-80 md:font-bold text-xl">contact:</p>
        <p className="relative top-[30px] left-80 md:font-medium text-sm">Phone: 0682890250 &nbsp; &nbsp; &nbsp; &nbsp; 
        Email: tilburgtreks@gmail.com &nbsp; &nbsp; &nbsp; &nbsp; Adres: Hart van Brabantlaan 383</p>
      </div>
    </div>
  )
}
