import React from 'react';

import Link from 'next/link'

const FactIndex = () => {
    return (
        <div className="h-96 w-full bg-white mb-20 overflow-hidden flex items-center justify-center position relative">
            <div className="h-auto w-full md:w-10/12 flex flex-col items-center justify-center">
                <h2 className="font-medium text-3xl mb-4">Did you know?</h2>
                <p className="h-auto w-10/12 md:w-8/12 leading-normal font-light text-lg md:text-3xl text-center">A good customer experience means your customers will spend more. 
                In fact, 86% of buyers are willing to pay more for a great customer experience.
                </p>
                <div className="position absolute bottom-0 left-1/2 -translate-x-5 md:-translate-x-0">
                    <Link href="https://www.superoffice.com/blog/customer-experience-statistics/#:~:text=A%20good%20customer%20experience%20means,to%20a%20research%20from%20PWC.">
                        <a className="font-medium underline text-gray-700 text-lg md:text-sm" target="_blank">Source</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FactIndex;