import React from 'react';

// globals
import Nav from '../../globals/Nav/NavIndex';
import Footer from '../../globals/Footer/FooterIndex';

// components
import Hero from './Hero/HeroIndex';
import Regions from './Regions/RegionsIndex';
import About from './About/AboutIndex';
import Fact from './Fact/FactIndex';
import LatestExperience from './LatestExperience/LatestExperienceIndex';
import Category from './Category/CategoryIndex';

const HomeIndex = () => {
    return (
        <div className="h-auto w-full bg-white overflow-hidden">
            <Nav />
            <Hero />
            <Regions />
            <About />
            <Fact />
            <LatestExperience />
            <Category />
            <Footer />
        </div>
    )
}

export default HomeIndex;