import React from 'react'

export default function WhereToStay() {
  return (
    <div>
        <div className="relative flex flex-column w-screen bg-white justify-center items-center top-[200px] flex-wrap">
        <h1 className="text-heavy-blue md:font-extrabold text-5xl w-screen text-center">Top 3 places to stay!</h1>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">1</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Mercure Hotel Tilburg</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              A comfortable and modern hotel located near the city center, offering a convenient base for exploring Tilburg.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full" src="src//assets/MercureHotelTilburg.jpg" alt="" />
          </div>
        </div>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">2</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Hostel Roots</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
              If you're traveling on a budget, Hostel Roots is a stylish and budget-friendly option with a vibrant atmosphere.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/HostelRoots.jpg" alt="" />
          </div>
        </div>
        <div className="relative flex flex-row justify-center mt-[100px]">
          <div className=" flex w-[100px] h-[100px] rounded-full bg-heavy-blue justify-center items-center">
            <p className=" relative top-[-3px] text-light-blue md:font-extrabold text-7xl">3</p>
          </div>
          <div className="relative flex flex-column w-[500px] flex-wrap mx-[40px] overflow-hidden content-start">
            <p className="relative text-medium-blue md:font-bold text-2xl mt-[80px]">Auberge Du Bonheur</p>
            <p className="relative text-gray-400 md:font-medium mt-[20px]">
                A boutique hotel set in a beautiful woodland area, perfect for those seeking a peaceful retreat.
            </p>
          </div>
          <div className="relative flex w-[400px] h-[170px] overflow-hidden justify-center items-center mt-[80px] blauwDropshadow">
            <img className="absolute min-h-full min-w-full blauwDropshadow" src="src//assets/AubergeDuBonheur.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
