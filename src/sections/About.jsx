import React, { useRef } from "react";
import Card from '../components/Card'
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Introduction */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Milad Khnefes</p>
            <p className="subtext">
                An ambitious AI engineer from Damscus University, who's always energetic and eager to learn new skills.
                I believe in "Work Smarter, Not Harder", enabling me to do more in less time.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h=1/3 bg-gradient-to-t from-indigo"/>
        </div>
        {/* Grid 2 - Skills */}
        <div className="grid-default-color grid-2">
            <div className="flex items-center justify-center w-full h-full" ref={grid2Container}>
                <p className="flex items-end text-4xl text-gray-500">Knowledge Sample</p>
                <Card style={{rotate: '75deg', top: '30%', left: '20%'}} text='Machine Learning' containerRef={grid2Container}/>
                <Card style={{rotate: '-30deg', top: '60%', left: '45%'}} text='Data Mining' containerRef={grid2Container}/>
                <Card style={{rotate: '20deg', top: '10%', left: '30%'}} text='Computer Vision' containerRef={grid2Container}/>
                <Card style={{rotate: '-45deg', top: '55%', left: '0%'}} text='Data Analysis' containerRef={grid2Container}/>
                <Card style={{rotate: '15deg', top: '70%', left: '25%'}} image='assets/logos/openproject.png' containerRef={grid2Container}/>
                <Card style={{rotate: '-15deg', top: '30%', left: '70%'}} image='assets/logos/draw-io.png' containerRef={grid2Container}/>
                <Card style={{rotate: '0deg', top: '5%', left: '10%'}} image='assets/logos/jira.jpg' containerRef={grid2Container}/>
            </div>
        </div>
        {/* Grid 3 - Location */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext">
                    Location
                </p>
                <p className="subtext">
                    I'm based in Syria, and open to remote work worldwide
                </p>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
        </div>
        {/* Grid 4 - Call to Action */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">
                    Do You Want to Start a Project Together?
                </p>
                <CopyEmailButton/>
            </div>
        </div>
        {/* Grid 5 - Tech Stack */}
        <div className="grid-default-color grid-5" >
            <div className="z-10 w-[50%]">
                <p className="headtext">
                    Tech Stack
                </p>
                <p className="subtext">
                    I specialize in a variety of Programming Languages, Frameworks, and Dev Tools that allow me to build Robust and Scalable Services. 
                </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
