import React from "react";
import '../App.css';


const Services = () => {
    
    const services = [
        {id: 1, name:'BSC COMPUTER SCIENCE', description:'ERANAD KNOWLEDGE CITY ,Manjeri   (Calicut University)'},
        {id:2, name:'HIGHER SECONDARY', description:'SHMGHSS, Edavanna  (Kerala Board)'},
        {id:3, name:'SSLC', description:'MES MAMPAD               (Kerala Board) '},
    ];

    const skills = [
        { name: "HTML & CSS" },
        { name: "JAVASCRIPT" },
        { name: "REACT JS" },
        { name: "BOOTSTRAP" },
        { name: "TAILWIND" },
        { name: "C++" },
        { name: "C#" },
        { name: "ASP.NET" },
    ];
    const skill = [
        { name: "TIME MANAGEMENT" },
        { name: "ADAPAIBILITY" },
        { name: "COLLABORATION" },
        { name: "PROFESSIONALISM" },
        { name: "PROBLEM-SOLVING" },
    ];
    return (
        <div>
            <h1 className="text-primary font-semibold text-2xl mt-14">EDUCATION</h1>
            <div className='grid md:grid-cols-3 my-8 gap-5'>
                {
                    services.map(service => <div key={service.id} className='service-card flex flex-col  justify-center items-center p-6 text-center text-white'>
                        <img src={service.image} alt="" className='mb-3' />
                        <h6 className='text-2xl mb-4'>{service.name}</h6>
                        <p className='text-base'>{service.description}</p>
                    </div>)
                }
            </div>
            <div>
                <h1 className="text-primary font-semibold text-2xl mt-14">TECHNICAL SKILLS</h1>

                <div className="flex flex-col md:flex-row flex flex-wrap ">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="md:w-[300px] md:h-[160px] bg-light bg-primary flex flex-wrap items-baseline justify-end md:m-3 my-3 p-6 shadow-sm skills transition-all duration-500">

                            <p className="mt-5 text-2xl text-white font-semibold">
                                {skill.name}
                            </p>

                        </div>

                    ))}

                </div>
                <div>
                    <h1 className="text-primary font-semibold text-2xl mt-14">SOFT SKILLS</h1>
                    <div className="flex flex-col md:flex-row flex flex-wrap ">
                        <div className="flex flex-col md:flex-row flex flex-wrap ">
                            {skill.map((skill, index) => (
                                <div
                                    key={index}
                                    className="md:w-[300px] md:h-[160px] bg-light bg-primary flex flex-wrap items-baseline justify-end md:m-3 my-3 p-6 shadow-sm skills transition-all duration-500">

                                    <p className="mt-5 text-2xl text-white font-semibold">
                                        {skill.name}
                                    </p>

                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Services;