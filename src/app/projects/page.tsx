'use client'
import Header from "@/Components/header";
import projects from "@/data/projects.json";
import { useEffect, useState } from "react";

export default function Projects() {

    interface Project {
        id: number,
        name: string,
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
        var projectsArray:Project[] = Object.values(projects);
        projectsArray.sort((a, b) => (a.id > b.id) ? 1 : -1)
        setProjectsArray(projectsArray);
    }

    return (
        <div>
            <Header/>
            <div className="w-4/6 flex justify-self-center mx-auto">
                <div className="flex flex-col">
                    <h1 className="font-bold"> Meine Projekte </h1>
                    <div>
                        {projectsArray.map((project) => (
                            <div className="flex flex-col border-t-2 m-2">
                                <div className="flex-col">
                                    <h2 className="font-bold"> {project.name} </h2>
                                    <div className="mt-1">
                                        <b> Beschreibung: </b>
                                        {project.description.map((description) => (
                                            <div>
                                                {description}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <b> Meine Arbeit: </b>
                                        {project.myWork.map((myWork) => (
                                            <div>
                                                {myWork}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <b> Genutzte Technologien: </b>
                                        <div className="flex flex-row">
                                            {project.technologies.map((technology) => (
                                                <div className="mr-2">
                                                    {technology}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {project.links && (
                                        <div className="mt-2">
                                            <b> Links: </b>
                                            <div className="flex flex-row">
                                                {project.links.map((link) => (
                                                    <div className="mr-2">
                                                        <a href={link.url} target="_blank">
                                                            {link.name}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    )
}