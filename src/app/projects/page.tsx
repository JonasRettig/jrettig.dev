'use client'
import Header from "@/Components/header";
import projects from "@/data/projects.json";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {

    interface Project {
        id: number,
        name: string,
        timeframe: string,
        image: string,
        imageAlt: string,
        description: string[],
        technologies: string[],
        myWork: string[],
        links?: link[]
    }

    interface link {
        url: string,
        name: string
    }

    useEffect(() => {
        getProjects();
    }, [])

    const [projectsArray, setProjectsArray] = useState<Project[]>([]);

    function getProjects() {
        var projectsArray: Project[] = Object.values(projects);
        projectsArray.sort((a, b) => (a.id > b.id) ? 1 : -1)
        setProjectsArray(projectsArray);
    }

    return (
        <div>
            <Header />
            <div className="w-4/6 flex justify-self-center mx-auto max-sm:w-11/12">
                <div className="flex flex-col">
                    <h1 className="font-bold"> Meine Projekte </h1>
                    <div>
                        {projectsArray.map((project) => (
                            <div key={project.id} className="flex flex-col border-t-2 m-2 max-sm:m-0">
                                <div className="flex-col mt-1">
                                    <div className="flex flex-row">
                                        <h2 className="font-bold mr-2"> {project.name} </h2>
                                        <div> {project.timeframe} </div>
                                    </div>
                                    <div className="flex max-sm:flex-col">
                                        <div className="mt-2 mr-2 w-3/6 max-sm:w-full">
                                            <img src={`/${project.image}`} alt={project.imageAlt} className="object-contain" />
                                        </div>
                                        <div className="mt-1 flex w-2/6 content-center max-sm:w-full">
                                            {project.description}
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <b> Meine Arbeit: </b>
                                        {project.myWork.map((myWork, index) => (
                                            <div key={index}>
                                                {myWork}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-row max-sm:mb-3">
                                        <div className="mt-2 mr-2">
                                            <b> Genutzte Technologien: </b>
                                            <div className="flex flex-row max-sm:flex-col" >
                                                {project.technologies.map((technology, index) => (
                                                    <div key={index} className="mr-2 text">
                                                        {technology}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {project.links && (
                                            <div className="mt-2 max-sm:border-l">
                                                <div className="max-sm:ml-3">
                                                    <b> Links: </b>
                                                    <div className="flex flex-row max-sm:flex-col">
                                                        {project.links.map((link, index) => (
                                                            <div key={index} className="mr-2">
                                                                <a href={link.url} target="_blank">
                                                                    {link.name}
                                                                </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}