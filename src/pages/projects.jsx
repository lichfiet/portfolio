import { useState, useRef, useEffect } from 'react';


const Projects = function () {
    const [activeProject, setActiveProject] = useState(null);
    const [activeProjectData, setActiveProjectData] = useState({ name: "", imgSrc: "", about: [], techStack: [], ref: null, repos: [{ name: "", link: "" }] });

    const buttonRef = useRef(null);

    const FileExplorer = () => {
        return <>
            <div className="flex justify-center items-center content-center" >
                <iframe
                    className="hidden w-full md:block iframe-mobile"
                    src="https://files.trevorlichfield.com"
                    title="File Explorer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media"></iframe>
                <img className="block md:hidden p-4" src="./file explorer.png"></img>
            </div>
        </>
    };

    const Project2 = () => {
        return <>
            <div className="flex justify-center items-center content-center" >
                <iframe
                    className="hidden w-full sm:block iframe-mobile bg-white"
                    src="https://trevorlichfield.com/home"
                    title="File Explorer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media"></iframe>
            </div>
        </>
    }

    const Project3 = () => {
        return <>
            <img className={`self-center items-center mx-auto`} src='https://via.placeholder.com/1100x500'></img>
        </>
    }

    const projects = [{
        name: "File Explorer",
        imgSrc: './explorer.png',
        about: [
            "It's a simple file explorer with enough features to manage all your files and folders. " + 
            " As my first Fullstack project, it taught me everything I know about React.js. It uses " +
            "an Express.js backend deployed on AWS EC2, an Amazon S3 bucket to store " +
            "all the files and folders, and a React.js frontend deployed with AWS' Amplify for easy CI/CD, and " +
            "SSL renewal."
            ,
            "My next steps for this project are to automate the CD for the backend, and setup a Kubernetes cluster on " +
            "a separate EC2 instance, with ArgoCD for Gitops, and to then move the remainder of the project to " +
            "Terraform."
        ],
        techStack: [
            "React.js", "Express.js", "Amazon S3", "AWS EC2", "AWS Amplify", "Terraform"
        ],
        ref: buttonRef,
        repos: [{
            name: "Frontend", link: "https://github.com/lichfiet/file-explorer-web"
        }, {
            name: "Backend", link: "https://github.com/lichfiet/file-explorer-backend"
        }, {
            name: "Infrastructure", link: "https://github.com/lichfiet/file-explorer-infra"
        }]
    }, {
        name: "Portfolio",
        imgSrc: 'https://via.placeholder.com/600x300',
        about: ["This was my second attempt at making a portfolio, and I wanted to have created the whole site from scratch. " +
            "This was my first exposure to TailwindCSS and I loved using it. My goal was to focus on scaling for mobile to make the website useable on all plafforms. "],
        techStack: ["Tech 1", "Tech 2", "Tech 3"],
        ref: null,
        repos: [{ name: "", link: "" }]
    }, {
        name: "Project 3",
        imgSrc: 'https://via.placeholder.com/600x300',
        about: ["This is a placeholder for Project 3"],
        techStack: ["Tech 1", "Tech 2", "Tech 3"],
        ref: null,
        repos: [{ name: "", link: "" }]
    }]

    const ProjectSelector = (project) => {
        if (activeProjectData.name === project) {
            return
        } else if (project === "File Explorer") {
            setActiveProject(<FileExplorer />);
            setActiveProjectData(projects[0]);

        } else if (project === "Portfolio") {
            setActiveProject(<Project2 />);
            setActiveProjectData(projects[1]);
        } else if (project === "Project 3") {
            setActiveProject(<Project3 />);
            setActiveProjectData(projects[2]);
        }
    }

    const buttonCSS = "group py-3 px-2 m-2 hover:py-3 outline-none focus:outline focus:bg-neutral-500 outline-offset-0 hover:outline rounded-lg hover:outline-8 focus:outline-4 shadow-2xl transition-all duration-300 dark:bg-neutral-600  dark:hover:bg-neutral-500 hover:bg-neutral-200 bg-neutral-300 hover:outline-neutral-200 dark:hover:outline-neutral-400";
    const h1CSS = "p-2 font-semibold text-lg group-focus:text-gray-300 group-hover:text-sm group-hover:p-1 transition-all duration-300 text-black dark:text-white";
    const imgCSS = "rounded-xl h-0 group-hover:h-20 group-hover:aspect-video w-full transition-all duration-300";



    return (

        useEffect(() => {
            ProjectSelector("File Explorer");
            buttonRef.current.focus();
        }, []),

        <>
            <div className="text-black dark:text-white container mx-auto block p-4 mb-4 rounded-3xl shadow-3xl">

                <div className="projects-container container mx-auto block p-4 md:grid mb-4 rounded-3xl shadow-3xl" style={{ gridTemplateColumns: "1fr 3fr 2fr" }}>
                    <nav className='hidden flex-col justify-start me-4 my-4 md:flex text-center' >
                        <h1 className="text-xl font-semibold italic mb-4">Pick a project!</h1><i className="fa-solid fa-arrow-down"></i>
                        {
                            projects.map((btn) =>
                                <button ref={btn.ref} key={btn.name} className={buttonCSS} onClick={() => { ProjectSelector(btn.name) }}>
                                    <h1 className={h1CSS}>{btn.name}</h1>
                                    <img className={imgCSS} src={btn.imgSrc}></img>
                                </button>
                            )
                        }
                        <h1 className="text-xl font-semibold italic mb-4">TBA..</h1>
                    </nav>
                    <div className="rounded-xl mr-4">
                        {/** ACTIVE PROJECT AND NAME */}
                        <h1 className="text-black dark:text-white font-semibold md:font-bold text-3xl md:text-4xl text-center">{activeProjectData.name}</h1>
                        <div className="rounded-3xl shadow-3xl">
                            {activeProject}
                        </div>
                    </div>
                    <div className="p-4 bg-neutral-300 dark:bg-neutral-600 rounded-xl block">
                        <div className="p-2">
                            <h1 className="text-lg md:text-xl font-bold mb-1 underline">About This Project.</h1>
                            {
                                activeProjectData.about.map((p) => <p key={p} className="p-2 indent-2 text-sm md:text-base">{p}</p>)
                            }
                        </div>
                        <div className="p-2">
                            <p className="text-base md:text-lg font-bold">Tech Stack</p>
                            <p className="list-disc">
                                {
                                    activeProjectData.techStack.map((tech) => tech + ", ")
                                }
                            </p>
                        </div>
                        <div className="flex flex-col p-6">
                            {
                                activeProjectData.repos.map((repo) => {
                                    return (
                                        <button className="bg-neutral-800 m-2 p-2 rounded-xl min-w-50">
                                            <a key={repo.name} href={repo.link} className="text-white hover:text-gray-300 md:block"><i className="fab fa-github"></i> { repo.name } </a>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;


