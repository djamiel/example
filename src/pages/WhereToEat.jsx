import React from 'react'

export default function WhereToEat() {
  return (
    <div className="w-screen relative flex flex-col max-w-full">
        <div className="relative flex flex-column w-screen bg-white justify-center items-center top-[200px] flex-wrap">
        <h1 className="text-heavy-blue md:font-extrabold text-5xl w-screen text-center">Top 3 places to eat!</h1>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">1</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">RAW</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              A trendy restaurant located in the heart of Tilburg, offering a diverse menu with fresh 
              and locally sourced ingredients.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full" src="src//assets/raw.jpg" alt="" />
          </div>
        </div>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">2</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Hofstede de Blaak</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              Located in a historic farm, this restaurant offers an exquisite dining experience with a focus on regional cuisine.
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
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">De Houtloods</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              Housed in a former railway workshop, this restaurant combines an industrial atmosphere with delicious dishes and an extensive wine list.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/Houtloods.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
