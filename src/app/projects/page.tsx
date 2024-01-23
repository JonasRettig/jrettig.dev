import Header from "@/components/header";
import projects from "@/data/projects.json";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/imageCarousel";

    interface Project {
        id: number,
        name: string,
        timeframe: string,
        image: Image[],
        description: string[],
        technologies: string[],
        myWork: string[],
        links?: Link[]
    }

    interface Link {
        url: string,
        name: string
    }

    interface Image{
        path: string,
        alt: string
    }

export default function Projects() {

    var projectsArray : Project[] = [];

    async function getProjects() {
        projectsArray = Object.values(projects);
        projectsArray.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return projectsArray;
    }

    getProjects()

    return (
        <div>
            <Header highlight={"projects"}/>
            <div className="w-4/6 flex justify-self-center mx-auto max-sm:w-11/12">
                <div className="flex flex-col">
                    <h1 className="font-bold"> Meine Projekte </h1>
                    {projectsArray.length > 0 && (
                    <div>
                        {projectsArray.map((project) => (
                            <div key={project.id} className="flex flex-col border-t-2 m-2 max-sm:m-0 max-sm:w-[97%]">
                                <div className="flex-col mt-1">
                                    <div className="flex flex-row">
                                        <h2 className="font-bold mr-2"> {project.name} </h2>
                                        <div> {project.timeframe} </div>
                                    </div>
                                    <div className="flex max-sm:flex-col">
                                        <div className="mt-2 mr-2 w-3/6 max-sm:w-full">
                                            <ImageCarousel images={project.image}/>
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
                                                    <div key={index} className="mr-1 text flex">
                                                        {technology}
                                                    <div key={index} className={`ml-1 ${index !== project.technologies.length - 1 ? 'border-r-2' : ''} max-sm:border-r-0`}/>
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
                                                            <div key={index} className="mr-1 flex">
                                                                <a href={link.url} target="_blank">
                                                                    {link.name}
                                                                </a>
                                                                <div key={index} className={`ml-1 ${index !== project.links!.length - 1 ? 'border-r-2' : ''} max-sm:border-r-0`}/>
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
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}