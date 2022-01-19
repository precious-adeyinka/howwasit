import React from 'react';
import styled from './NavIndex.module.css';

// components

const NavIndex = () => {
    return (
        <nav className="h-16 w-full bg-white px-5 md:px-20 flex items-center justify-center shadow">
           <div className="w-full flex items-center justify-between">
                <div className={`h-full w-1/2`}>
                    <h1 className={`h-full w-32 text-2xl ${styled.logo}`}>howwasit</h1>
                </div>

                <div className="h-full w-1/2 flex items-center justify-end space-x-5">
                    <div className={`h-full w-auto flex items-center justify-end space-x-5 ${styled.hiddenElem}`}>
                        <button className="h-10 text-gray-500 font-normal text-sm">Explore</button>
                        <button className="h-10 text-gray-500 font-medium text-sm border border-gray-300 px-5 py-1 rounded">Vent your experience</button>
                        <button className="h-10 text-white text-sm bg-blue-500 font-medium px-5 py-1 rounded flex items-center justiyf-center">Create an experience</button>
                    </div>

                    <div className={`h-12 w-10 flex flex-col space-y-2 items-center justify-center cursor-pointer`}>
                        <span className="h-[1px] w-full bg-gray-900 rounded-lg"></span>
                        <span className="h-[1px] w-8/12 bg-gray-900 rounded-lg"></span>
                        <span className="h-[1px] w-full bg-gray-900 rounded-lg"></span>
                    </div>
                </div>
           </div>
        </nav>
    )
}

export default NavIndex;