import React from "react";
import carImage from "../assets/projects/car.jpg";
import saveImage from "../assets/projects/save.jpg";

const Projects = () => {
    const projects = [
        {
            title: "ROYAL DRIVE",
            description:
                "Contributed to the development of a comprehensive car rental website that empowers users to select a vehicle that suits their needs and preferences",
            photo: carImage,
        },

        {
            title: "XAF MONEY",
            description:
                "it is a  physical chit fund system to an innovative and cost-effective online platform, optimizing financial processes and enhancing user experience.",
            photo: saveImage,
        },
    ];
    return (
        <div className="md:px-10 px-7 my-8" id="projects">
            <h1 className="text-primary font-semibold text-3xl mt-16">
                PROJECTS
            </h1>
            <p className="my-3 text-white md:w-3/4 leading-[2]">
                I have worked on many projects over the course of being a Web Developer,
                here are a few of my live
            </p>
            {/* featured projects */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
                        >
                            <a
                                href={project.photo}
                                target="_blank"
                                rel="noreferrer"
                                className="mb-4"
                            >
                                <img src={project.photo} alt={project.title} />
                            </a>
                            <h3 className="text-primary font-semibold text-lg">
                                {project.title}
                            </h3>
                            <p className=" text-white mt-1">{project.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;