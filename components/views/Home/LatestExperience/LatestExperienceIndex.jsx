import React, {useState, useEffect} from 'react';

import Link from 'next/link'
import Image from 'next/image'

const LatestExperienceIndex = () => {
    // State Variables
    const [experiences, setExperiences] = useState([1,2,3,4,5,6,7,8,9,10]);

    return (
        <div className="h-auto w-full bg-gray-50 mb-20 overflow-hidden flex flex-col items-center justify-start py-10 position relative">
            {/* Title */}
            <h3 className="font-bold text-3xl text-center w-10/12 md:w-full md:text-4xl ">View The Latest Experiences</h3>
            {/* List */}
            <div className="h-full w-11/12 mt-10 grid grid-cols-1 md:grid-cols-5 gap-5">
                {
                    experiences.map(function (experience) {
                        return (
                            <div className="h-[25rem] md:h-[21rem] w-10/12 md:w-full mx-auto overflow-x-auto bg-white rounded-lg shadow-2xl flex flex-col items-center justify-start 
                            overflow-hidden transition duration-700 hover:-translate-y-1">
                                <div className="h-[24rem] w-full bg-gray-50 flex items-center justify-center cursor-pointer position relative">
                                    <Image src="/assets/images/business.jpg" alt="" width="900" height="700" />
                                    {/* Favorite */}
                                    <div className="h-auto w-auto absolute right-3 -bottom-5 flex items-center justify-center cursor-pointer">
                                        <FavComponent />
                                    </div>
                                </div>
                                <div className="h-full w-full bg-white p-2 px-3">
                                    <h4 className="font-bold text-2xl md:text-md mb-1 cursor-pointer hover:underline transition duration-300">Howwasit Launch</h4>
                                    <p className="text-blue-600 text-lg md:text-sm flex items-center justify-start space-x-2">
                                        <i className="la la-calendar text-lg text-gray-600"></i>
                                        <span>Sat, Jun 22, 10:00AM</span>
                                    </p>
                                    <p className="w-full text-gray-600 mt-2 text-lg md:text-sm flex items-start justify-start space-x-2">
                                        <i className="la la-map-marker text-lg text-gray-600 -mt-1"></i>
                                        <span>{`${"Suite 27b, Landmark plaza, yesderam street, Abuja".substring(0, 20)}...`}</span>
                                    </p>
                                    <div className="h-auto w-auto mt-2 flex items-center justify-start space-x-1">
                                        <i className="la la-eye text-gray-500 text-lg mt-[1px]"></i>
                                        <span className="text-gray-500 text-md">Views</span>
                                        <span className="text-gray-600 text-md">33.3k</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }             
            </div>

            {/* CTA */}
            <button className="flex items-center justify-center space-x-3 text-md text-gray-800 mx-auto my-16 font-bold transition duration-300 hover:text-blue-500">
                <span>See all</span> 
                <i className="la la-arrow-right text-xl mt-1"></i>
            </button>
        </div>
    )
}

const FavComponent = () => {
    const [isFav, setFav] = useState(false);

    // Functions
    const toggleFav = () => {
        setFav(!isFav);
    }

    return (
        <div 
        onClick={toggleFav}
        className="h-12 w-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
            <i className={`la la-heart text-xl ${isFav ? 'text-blue-500' : 'text-gray-200'}`}></i>
        </div>
    )

}

export default LatestExperienceIndex;