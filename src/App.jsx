function App() {

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
        <p className="text-light-blue text-4xl md:font-bold mx-10">What to do?</p>
        <p className="text-light-blue text-4xl md:font-bold mx-10">Where to eat?</p>
        <p className="text-light-blue text-4xl md:font-bold mx-10">Where to stay?</p>
      </div>
      <div className="relative flex flex-column w-screen bg-white justify-center items-center top-[200px] flex-wrap">
        <h1 className="text-heavy-blue md:font-extrabold text-5xl w-screen text-center">Top 3 things to do!</h1>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">1</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">The efteling</p>
            <p className="relative text-gray-400 md:font-medium">
              Start your visit with a trip to De Efteling, one of Europe's most enchanting 
              theme parks. It's filled with thrilling rides, beautiful gardens, and fairy-tale-themed 
              attractions that are perfect for both kids and adults.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full" src="src//assets/Efteling_Entrance.jpg" alt="" />
          </div>
        </div>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">2</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] justify-top overflow-hidden">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Tilburg Textile Museum</p>
            <p className="relative text-gray-400 md:font-medium">
              Learn about Tilburg's industrial heritage at the Textile Museum. Explore the history 
              of textile production and see modern textile art exhibitions.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/Photo-Josefina-Eikenaar-TextielMuseum-2020-019-005-city-guide-013-Straatjes-Tilburg.jpg" alt="" />
          </div>
        </div>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">3</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] justify-top overflow-hidden">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Safaripark Beekse Bergen</p>
            <p className="relative text-gray-400 md:font-medium">
              Just a short drive from Tilburg, you can visit Safaripark Beekse Bergen, one of the largest 
              wildlife safari parks in Europe. Experience an African safari right in the heart of the Netherlands.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/beekse-bergen2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="relative top-[300px] h-[100px] flex w-screen flex-col bg-gray-300 overflow-hidden">
        <p className="relative top-[30px] left-80 md:font-bold text-xl">contact:</p>
        <p className="relative top-[30px] left-80 md:font-medium text-sm">Phone: 0682890250 &nbsp; &nbsp; &nbsp; &nbsp; 
        Email: tilburgtreks@gmail.com &nbsp; &nbsp; &nbsp; &nbsp; Adres: Hart van Brabantlaan 383</p>
      </div>
    </div>
  )
}

export default App
