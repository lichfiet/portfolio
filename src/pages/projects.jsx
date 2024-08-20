import { useState, useRef, useEffect } from 'react';

const Projects = function () {
    const [activeProject, setActiveProject] = useState(null);
    const [activeProjectName, setActiveProjectName] = useState(null);


    const FileExplorerRef = useRef(null);
    const FileExplorer = () => {
        return <>
            <div className="flex justify-center items-center content-center" >
                <iframe className="w-full hidden sm:block iframe-mobile"
                    src="https://files.trevorlichfield.com" title="File Explorer" allow="accelerometer; autoplay; clipboard-write; encrypted-media"></iframe>
                <img className="block sm:hidden " src="./file explorer.png"></img>
            </div>
        </>
    };

    const Project2 = () => {
        return <>
                <img className={`self-center items-center mx-auto`} src='https://via.placeholder.com/1100x600'></img>
        </>
    }

    const Project3 = () => {
        return <>
                <img className={`self-center items-center mx-auto`} src='https://via.placeholder.com/1100x600'></img>
        </>
    }

    const ProjectSelector = (project) => {
        if (activeProject === project) {
            return
        } else if (project === "File Explorer") {
            setActiveProject(<FileExplorer />);
            setActiveProjectName("File Explorer");

        } else if (project === "Project 2") {
            setActiveProject(<Project2 />);
            setActiveProjectName("Project 2");
        } else if (project === "Project 3") {
            setActiveProject(<Project3 />);
            setActiveProjectName("Project 3");
        }
    }

    const navButtons = [
        {
            name: "File Explorer",
            button: 
                <button onClick={() => ProjectSelector("File Explorer")} >
                    <div className={`p-5 m-2 bg-neutral-200 hover:bg-neutral-300 rounded-xl ${activeProjectName === 'File Explorer' ? 'bg-neutral-100 shadow-xl animate-bounce' : ''}`} >
                        <h1 className="font-semibold text-lg">File Explorer</h1>
                        <img className={`${activeProjectName !== 'File Explorer' ? '' : 'hidden'}`} src='./explorer.png'></img>
                    </div>
                </button>
        },
        {
            name: "Project 2",
            button: 
                <button onClick={() => ProjectSelector("Project 2")} >
                    <div className={`p-5 m-2 bg-neutral-200 hover:bg-neutral-300 rounded-xl ${activeProjectName === 'Project 2' ? 'bg-neutral-100 shadow-xl animate-bounce' : ''}`} >
                        <h1 className="font-semibold text-lg">Project 2</h1>
                        <img className={`${activeProjectName !== 'Project 2' ? '' : 'hidden'}`} src='https://via.placeholder.com/600x300'></img>
                    </div>
                </button>
        },
        {
            name: "Project 3",
            button:
                <button onClick={() => ProjectSelector("Project 3")} >
                    <div className={`p-5 m-2 bg-neutral-200 hover:bg-neutral-300 rounded-xl ${activeProjectName === 'Project 3' ? 'bg-neutral-100 shadow-xl animate-bounce' : ''}`} >
                        <h1 className="font-semibold text-lg">Project 3</h1>
                        <img className={`${activeProjectName !== 'Project 3' ? '' : 'hidden'}`} src='https://via.placeholder.com/600x300'></img>
                    </div>
                </button>
        }
    ]


    return (

        useEffect(() => {
            ProjectSelector("File Explorer");
        }, []),

        <>
            <div className="projects-container container mx-auto block md:grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                <nav className='hidden flex-col justify-center me-4 my-4 md:flex' >
                    {
                        navButtons.sort((btn) => {
                            if (btn.name === activeProjectName) return -1; // Move a to the front
                            if (btn.name !== activeProjectName) return 1; // Move b to the front
                            return 0; // Keep the original order
                        }).map((btn) => btn.button)
                    }
                </nav>
                <div className="rounded-xl mr-4">
                    <h1 className="font-bold text-5xl text-center">{activeProjectName}</h1>
                    {activeProject}
                </div>
            </div>
            <div className="container p-6 max-w-sm mx-auto bg-neutral-100 rounded-xl shadow-xl mb-6">
                <div className="p-2 block md:grid" style={{ gridTemplateColumns: "3fr 1fr" }}>
                    <div className="p-2">
                        <h1 className="text-xl font-bold mb-1 underline">About This Project.</h1>
                        <p className="indent-2 p-2">
                            As my first Fullstack project, it taught me everything I know about React.js.
                            It's a simple file explorer with enough features to manage all your files and folders. It uses
                            an Express.js backend deployed on AWS EC2, an Amazon S3 bucket to store
                            all the files and folders, and a React.js frontend deployed with AWS' Amplify for easy CI/CD, and
                            SSL renewal.
                        </p>
                        <p className="indent-2 p-2">
                            My next steps for this project are to automate the CD for the backend, and setup a Kubernetes cluster on
                            a separate EC2 instance, with ArgoCD for Gitops, and to then move the remainder of the project to
                            Terraform.
                        </p>
                    </div>
                    <div className="p-2">
                        <p className="text-lg font-bold">Tech Stack</p>
                        <ul className="list-inside list-disc">
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>Amazon S3</li>
                            <li>AWS EC2</li>
                            <li>AWS Amplify</li>
                            <li>Terraform</li>
                        </ul>
                    </div>
                </div>
                <div className="sm:flex md:grid md:grid-cols-3 px-6 mx-auto">
                    <button className="bg-neutral-800 m-2 p-2 rounded-xl min-w-50">
                        <a className="text-white hover:text-gray-300 md:block" href="https://github.com/lichfiet/file-explorer-web" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> Frontend (Main Page)
                        </a>
                    </button>
                    <button className="bg-neutral-800 m-2 p-2 rounded-xl min-w-50">
                        <a className="text-white hover:text-gray-300 md:block" href="https://github.com/lichfiet/file-explorer-backend" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> Backend
                        </a>
                    </button>
                    <button className="bg-neutral-800 m-2 p-2 rounded-xl min-w-50">
                        <a className="text-white hover:text-gray-300 md:block" href="https://github.com/lichfiet/file-explorer-infra" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> Infrastructure
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Projects;
