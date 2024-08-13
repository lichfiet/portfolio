const Projects = function () {
    return (
        <>
            <div className="container p-6 max-w-med mx-auto">
                <h1 className="font-bold text-2xl">File Explorer</h1>
                <a href="https://files.trevorlichfield.com" target="_blank" rel="noopener noreferrer"><p className="underline">files.trevorlichfield.com</p></a>
                <h1 className="mt-4 italic font-semibold hidden md:block">Live Preview</h1>
                <div className="flex p-4 mx-auto justify-center items-center content-center">
                    <iframe className="w-full shadow-lg hidden md:block" style={{ height: "80vh", maxHeight: "650px", maxWidth: "1300px" }} src="https://files.trevorlichfield.com" title="File Explorer" allow="accelerometer; autoplay; clipboard-write; encrypted-media"></iframe>
                    <img className="block md:hidden" src="./file explorer.png"></img>
                </div>
            </div>
            <div className="container p-6 max-w-sm mx-auto bg-neutral-200 rounded-xl shadow-xl mb-6">
                <div className="grid p-2" style={{ gridTemplateColumns: "3fr 1fr" }}>
                    <div className="p-2">
                        <h1 className="text-xl font-bold">About This Project.</h1>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="p-2">
                        <p className="text-lg font-bold">Tech Stack</p>
                        <ul className="list-inside list-disc">
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>Amazon S3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
