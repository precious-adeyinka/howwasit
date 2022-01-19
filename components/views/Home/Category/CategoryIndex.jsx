import React from 'react';

import Link from 'next/link'
import Image from 'next/image'

const CategoryIndex = () => {
    return (
        <div className="h-auto w-full flex flex-col items-center justify-start space-y-20 mb-20 pb-10">
            <h3 className="font-bold text-3xl text-center w-10/12 md:w-full md:text-4xl">There&lsquo;s more than just <span className="text-blue-500">event</span> and stuff</h3>
            <div className="h-auto w-full flex flex-col md:flex-row items-center justify-center space-y-10 md:space-x-10 px-7 md:px-20">
                {/* card */}
                <div className="h-[30rem] w-full md:w-[33.333%] bg-blue-100 flex flex-col items-center justify-start spacey-5">
                    <div className="h-82 w-full mb-16 overflow-hidden">
                        <Image src="/assets/images/trip.jpg" alt="" width="500" height="400" />
                    </div>
                    <h6 className="font-medium text-xl">Howwasit <span className="text-blue-500">Trips</span></h6>
                    <Link href="#">
                        <a className="mt-5 text-blue-600 underline">Check it out</a>
                    </Link>
                </div>

                {/* card */}
                <div className="h-[30rem] w-full md:w-[33.333%] bg-gray-100 flex flex-col items-center justify-start spacey-5">
                    <div className="h-82 w-full mb-16 overflow-hidden">
                        <Image src="/assets/images/players.jpg" alt="" width="500" height="400" />
                    </div>
                    <h6 className="font-medium text-xl">Howwasit <span className="text-blue-500">Soccer</span></h6>
                    <Link href="#">
                        <a className="mt-5 text-blue-600 underline">Check it out</a>
                    </Link>
                </div>

                {/* card */}
                <div className="h-[30rem] w-full md:w-[33.333%] bg-green-100 flex flex-col items-center justify-start spacey-5">
                    <div className="h-82 w-full mb-16 overflow-hidden">
                        <Image src="/assets/images/food.jpg" alt="" width="500" height="400" />
                    </div>
                    <h6 className="font-medium text-xl">Howwasit <span className="text-blue-500">Restaurants</span></h6>
                    <Link href="#">
                        <a className="mt-5 text-blue-600 underline">Check it out</a>
                    </Link>
                </div>
 
            </div>

             {/* CTA */}
             <button className="flex items-center justify-center space-x-3 text-md text-gray-800 mx-auto my-16 font-bold transition duration-300 hover:text-blue-500">
                <span>See all</span> 
                <i className="la la-arrow-right text-xl mt-1"></i>
            </button>
        </div>
    )
}

export default CategoryIndex;