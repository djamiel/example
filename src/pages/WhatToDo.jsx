import React from 'react'

const mapsClick = () => {
  if(document.getElementById("eftelingMap").style.display == "none"){
    document.getElementById("eftelingMap").style.display = "block";
  }
  else{
    document.getElementById("eftelingMap").style.display = "none";
  }

}

export default function WhatToDo() {
  return (
    <div className="w-screen relative flex flex-col max-w-full">
        <div className="relative flex flex-column w-screen bg-white justify-center items-center top-[200px] flex-wrap">
        <h1 className="text-heavy-blue md:font-extrabold text-5xl w-screen text-center">Top 3 things to do!</h1>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">1</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">The efteling</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              Start your visit with a trip to De Efteling, one of Europe's most enchanting 
              theme parks. It's filled with thrilling rides, beautiful gardens, and fairy-tale-themed 
              attractions that are perfect for both kids and adults.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full" src="src//assets/Efteling_Entrance.jpg" alt="" />
          </div>
          <img className='relative w-[70px] h-[70px] top-[130px] left-[50px] cursor-pointer' src="src//assets/maps.png" id='eftelingBtn' onClick={mapsClick}/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.5016133207064!2d5.047171276628679!3d51.65065177184622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c696a9aff44307%3A0x443bdab1ed5cb89a!2sEfteling!5e0!3m2!1snl!2snl!4v1695373178536!5m2!1snl!2snl" 
        className='relative w-screen h-[200px] top-7' id='eftelingMap'></iframe>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">2</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Tilburg Textile Museum</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              Learn about Tilburg's industrial heritage at the Textile Museum. Explore the history 
              of textile production and see modern textile art exhibitions.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/Photo-Josefina-Eikenaar-TextielMuseum-2020-019-005-city-guide-013-Straatjes-Tilburg.jpg" alt="" />
          </div>
          <img className='relative w-[70px] h-[70px] top-[130px] left-[50px]' src="src//assets/maps.png" />
        </div>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">3</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Safaripark Beekse Bergen</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              Just a short drive from Tilburg, you can visit Safaripark Beekse Bergen, one of the largest 
              wildlife safari parks in Europe. Experience an African safari right in the heart of the Netherlands.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/beekse-bergen2.jpg" alt="" />
          </div>
          <img className='relative w-[70px] h-[70px] top-[130px] left-[50px]' src="src//assets/maps.png" />
        </div>
      </div>
    </div>
  )
}
