import { useRef, useState } from 'react';

const Projects = function () {
    const FrameWrapper = () => {
        const ref = useRef();
        const [height, setHeight] = useState("0px");
        const onLoad = () => {
          setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
        };
        return (
          <iframe className="w-full hidden sm:block"
            ref={ref}
            onLoad={onLoad}
            id="myFrame"
            src="https://files.trevorlichfield.com"
            width="100%"
            height={height}
            style={{
              width: "100%",
              overflow: "auto",
            }}
          ></iframe>
        );
      }



    return (
        <>
            <div className="container p-6 mx-auto">
                <h1 className="font-bold text-2xl">File Explorer</h1>
                <a href="https://files.trevorlichfield.com" target="_blank" rel="noopener noreferrer"><p className="underline">files.trevorlichfield.com</p></a>
                <h1 className="mt-4 italic font-semibold hidden md:block">Live Preview</h1>
            </div>
                <div className="flex p-4 mx-auto justify-center items-center content-center">
                    <FrameWrapper />
                    <img className="block sm:hidden" src="./file explorer.png"></img>
                </div>
            <div className="container p-6 max-w-sm mx-auto bg-neutral-200 rounded-xl shadow-xl mb-6">
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
