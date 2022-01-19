import React, {useState, useEffect} from 'react';
import styled from './RegionsIndex.module.css'

import Link from 'next/link'

// React Flags
import ReactCountryFlag from "react-country-flag"

// components

const RegionsIndex = () => {
    // State Variables
    const [countriesView, setCountriesView] = useState(false);
    const [stateView, setStateView] = useState(true);
    const [isCountryListActive, setIsCountryListActive] = useState(false);


    /*
    *
    ** View Functions
    *
    */
    const showCountriesView = () => {
        setCountriesView(true);
        setStateView(false)
    }

    const showStateView = () => {
        setStateView(true)
        setCountriesView(false);
    }
    const toggleCountryListContainer = () => {
        setIsCountryListActive(!isCountryListActive);
    }
    
    return (
        <div className={`h-auto w-full flex flex-col items-start justify-start p-5 md:p-20 pt-28`}>
            {/* Header */}
            <div className="h-auto md:h-20 w-full flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 justify-between">
                <h3 className="w-/12 font-bold text-3xl">Explore cities where you find <span className="text-blue-500">Howwasit</span>.</h3>
                <div className="h-16 w-w-1/2 flex items-center justify-center space-x-5">
                    <button 
                    className={`font-normal select-none ${stateView ? " text-black underline" : "text-gray-400"}`}
                    onClick={showStateView}                    
                    >Nigeria</button>

                    <button 
                    className={`font-normal select-none ${countriesView ? " text-black underline" : "text-gray-400"}`}
                    onClick={showCountriesView}                    
                    >All countries</button>
                </div>
            </div>

            {/* Content */}
            <div className="h-auto w-full my-7">
               {/* Single Country View */}
               <div className={`h-full w-full flex flex-col md:flex-row items-start justify-start md:space-x-10 transition duration-700 
               ${stateView ? "opacity-100 -translate-y-0" : "h-0 invisible opacity-0 -translate-y-10 transform"}`}>
                    {/* Info */}
                    <div className="h-12 md:h-36 w-full md:w-[20%] flex flex-row md:flex-col justify-between md:justify-start items-start">
                        <div className="h-9 w-1/2 md:w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="NG"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Nigeria"
                                />
                            </div>
                            <p className="font-normal text-2xl">Nigeria</p>
                       </div>
                       <button className="font-normal text-blue-500 mt-3" onClick={showCountriesView}>Show all countries</button>
                    </div>

                    {/* States */}
                    <div className="h-auto w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* State */}
                        <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Abuja</span>
                            <i className="la la-angle-right"></i>
                        </div>
                        {/* State */}
                        <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                           <span className="group-hover:text-blue-500 font-normal text-gray-700">Lagos</span>
                           <i className="la la-angle-right"></i>
                       </div>
                        {/* State */}
                        <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                           <span className="group-hover:text-blue-500 font-normal text-gray-700">Portharcourt</span>
                           <i className="la la-angle-right"></i>
                       </div>
                   </div>
               </div>
               
                {/* All Countries View */}
                <div className={`${isCountryListActive ? "h-full" : "h-52"} md:h-full w-full grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5 transition duration-700 
               ${countriesView ? "opacity-100 -translate-y-0" : "h-0 invisible opacity-0 -translate-y-10"} position relative overflow-hidden`}>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="AZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Azerbaijan"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Azerbaijan</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(4)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="HR"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Croatia"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Croatia</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(11)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CY"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Cyprus"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Cyprus</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(5)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Czech Republic"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Czech Republic</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(24)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="AZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Azerbaijan"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Azerbaijan</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(4)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="HR"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Croatia"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Croatia</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(11)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CY"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Cyprus"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Cyprus</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(5)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Czech Republic"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Czech Republic</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(24)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="AZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Azerbaijan"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Azerbaijan</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(4)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="HR"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Croatia"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Croatia</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(11)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CY"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Cyprus"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Cyprus</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(5)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Czech Republic"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Czech Republic</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(24)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="AZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Azerbaijan"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Azerbaijan</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(4)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="HR"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Croatia"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Croatia</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(11)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CY"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Cyprus"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Cyprus</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(5)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Czech Republic"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Czech Republic</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(24)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="AZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Azerbaijan"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Azerbaijan</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(4)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="HR"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Croatia"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Croatia</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(11)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CY"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Cyprus"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Cyprus</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(5)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Czech Republic"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Czech Republic</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(24)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                        {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="AZ"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Azerbaijan"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Azerbaijan</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(4)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="HR"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Croatia"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Croatia</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(11)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    {/* Country */}
                    <div className="h-16 w-full border border-gray-300 rounded-md flex items-center justify-between p-3 
                        group hover:shadow-md cursor-pointer transition duration-300">
                            {/* Icon */}
                        <div className="h-9 w-full flex items-center justify-start space-x-3">
                            <div className="h-7 w-8 text-4xl rounded-md bg-gray-100 flex items-center justify-center shadow-md overflow-hidden">
                                <ReactCountryFlag
                                    countryCode="CY"
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="Cyprus"
                                />
                            </div>
                            <span className="group-hover:text-blue-500 font-normal text-gray-700">Cyprus</span>
                        </div>
                        
                        {/* Text */}
                        <div className="h-9 w-auto flex items-center justify-start space-x-3">
                            <span className="text-sm font-normal text-gray-400">(5)</span>
                            <i className="la la-angle-right"></i>
                        </div>
                    </div>
                    
                    {/* Toggle */}
                    <div 
                    onClick={toggleCountryListContainer}
                    className={`h-24 w-full ${styled.gradBg} position ${isCountryListActive ? "relative" : "absolute"} bottom-0 left-0 right-0 flex items-center justify-center text-lg text-blue-900 font-medium`}>
                        {isCountryListActive ? "Show less" : "Show all"}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default RegionsIndex;