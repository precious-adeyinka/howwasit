import React from 'react';
import styled from './HeroIndex.module.css'


// Type Animations
import TypeAnimation from 'react-type-animation';

// Particle Javascript Animation
import Particles from "react-tsparticles";

// components

const HeroIndex = () => {
    /*
    *
    * PARTICLES ANIMATION Functions
    *
    */
    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
        <div className={`h-[40rem] w-full bg-blue-300 ${styled.bgImg} flex flex-col items-start justify-start pl-5 md:pl-20 pt-32 position relative z-50 overflow-hidden`}>
            <p className={`h-32 text-4xl md:text-5xl w-full md:w-[40%] font-medium leading-tight text-white`}>
                <TypeAnimation
                    cursor={false}
                    sequence={['Say it, just exactly how it feels.', 
                    1000, 'Read what others have to say.', 
                    1000, 'Don\'t miss a chance to voice your opinion.', 
                    1000, 'Make right decisions from real moments.',
                    1000, 'Discover and become an early adopter.']}
                    wrapper="span"
                    repeat={Infinity}
                />
            </p>
            <div className="h-auto w-full mt-10 flex flex-col items-start justify-start">
                <p className="font-normal text-lg text-white">Discover Experiences</p>
                <form className="h-14 w-11/12 md:w-2/5 mt-4 rounded-md flex items-center justify-start space-x-3">
                    <div className="h-full w-full position relative">
                        <i className="la la-map-marker text-2xl text-black position absolute top-1/4 left-3"></i>
                        <input className="h-full w-full bg-white rounded-md px-5 pl-12 shadow focus:outline-none" type="text" placeholder="Search events, programs and more..." />
                    </div>
                    <button className="h-full w-32 bg-blue-700 text-white font-bold text-md rounded-md">Find</button>
                </form>
                {/* LINK */}
                <p className={`${styled.link} text-2xl text-white font-normal mt-10`}>Or view popular experiences</p>
            </div>

            {/* Particles */}
            {/* <Particles
                className="pointer-events-none z-0 h-full w-full position absolute"
                style={{
                    position: 'absolute!important',
                    zIndex: "0!important",
                    height: "100%!important",
                    width: "100%!important",
                    pointerEvents: "none"
                }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                    color: {
                        value: "transparent",
                    },
                    },
                    fpsLimit: 60,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: false,
                        mode: "push",
                        },
                        onHover: {
                        enable: false,
                        mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 4,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 200,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 1,
                    },
                    },
                    detectRetina: true,
                }}
            /> */}
        </div>
    )
}

export default HeroIndex;