import React from "react";
import Services from "../components/Services";

const About = () => {
    const skills = [
        { name: "SOFTWARE DEVELOPMENT" },

    ];
    return (
        <div className="md:px-10 px-7 sm:-mt-24" id="about">
            <h1 className="text-primary font-semibold text-3xl mt-5">ABOUT ME</h1>
            <p className="my-3 text-white md:w-2/3 leading-[2] text-xl">
                I am dedicated to performing at the best of my abilities and
                consistently striving for excellence in all of my endeavors.
                I am eager to take on new responsibilities and challenges, and
                I am committed to working diligently to achieve success.
            </p>
            <h1 className="text-primary font-semibold text-2xl mt-14">EXPERIENCE</h1>
            <div className="md:flex my-7 items-center">
                <div className="text-primary text-8xl font-bold">6</div>
                <p className="text-white text-2xl md:ml-5">
                    Month of experience. software development
                    training program, where I gained hands-on experience in
                    software development.
                    Worked on real projects, contributing to the development of
                    software solutions.
                    Collaborated effectively within a team to create and implement
                    software solutions.
                </p>
            </div>
            <div className="flex flex-col md:flex-row ">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="md:w-[220px] md:h-[220px] bg-light bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
                    >
                        <p className="mt-3 text-2xl text-white font-semibold">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
            <Services />
        </div>
    );
};

export default About;