import React from 'react';
import styled from './AboutIndex.module.css';

const AboutIndex = () => {
    return (
        <div className={`h-auto w-full ${styled.bg} mb-20 overflow-hidden pb-20 flex justify-center items-start`}>
            {/* Content */}
            <div className="h-auto md:h-[45rem] w-11/12 bg-white shadow-2xl rounded flex flex-col md:flex-row items-center justify-center">
                {/* Info */}
                <div className="h-auto md:h-full w-full md:w-1/2 bg-white flex flex-col items-start justify-start pb-10 md:pb-0 pt-10 md:pt-44 md:pl-32 pl-8">
                    <div className="h-auto w-full flex flex-col items-start justify-center">
                        <h3 className="font-bold text-lg mb-16 text-gray-700">What is Howwasit?</h3>
                        <h2 className="font-bold text-5xl mb-10 text-gray-800">Experience.</h2>
                        <p className="font-normal w-10/12 text-gray-700 leading-normal mb-12">Howwasit makes it incredibly easy for you to discover and get what you want. 
                        Delivered to you – quickly, reliably and affordably.</p>
                    </div>
                    {/* CTA */}
                    <div className="h-auto w-auto flex items-center justify-center space-x-4 cursor-pointer group">
                        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center group-hover:transform group-hover:scale-110 transition duration-300">
                            <i className="la la-play text-3xl text-white"></i>
                        </div>
                        <div className="font-medium text-blue-500">Watch video</div>
                    </div>
                </div>

                {/* Mockup */}
                <div className={`h-96 md:h-full w-full md:w-1/2 bg-gray-50 ${styled.mockup}`}></div>
            </div>
        </div>
    )
}

export default AboutIndex;