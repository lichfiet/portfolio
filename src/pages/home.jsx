import '/background.png';

const HomePage = function () {

    return (
        <div>
            {
                /**
                 * !NOTES
                 * - keep nav lowercase, upper case headings and sentences
                 */
            }
            <div className="container p-6 max-w-sm mx-auto sm:bg-none hero-background">
                <div className="flex mt-20 mb-10 justify-start">
                    <div className="md:grid-cols-2 grid sm:grid-cols-1">
                        <div className="hidden md:flex content-center justify-center">
                            <img src="https://via.placeholder.com/200" alt="profile picture" />
                        </div>
                        <div className="flex items-end justify-start">
                            <ul className="p-4 text-left">
                                <li className="font-medium">Hey! <i className="font-light">My name is,</i></li>
                                <li><b>Trevor Lichfield</b>, 20 yrs. Old</li>
                                <li className="font-light italic underline">Fullstack & DevOps Engineer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-6 max-w-sm mx-auto bg-neutral-200 rounded-xl shadow-xl mb-6">
                <div className="p-2 mb-4">
                    <h1 className="text-xl font-bold mb-1 underline">Who am I?</h1>
                    <div>
                        <p className="mb-1 indent-2">
                            I'm currently a Customer Support Associate II, and an in progress DevOps Engineer. After my first exposure
                            to system administration in middle school with the help of my dad, who helped bring a Minecraft server
                            online, I've had an interest in exploring operations and containerization, launching my servers in Docker.
                        </p>
                        <p className="indent-2">
                            Since then, I've held an interest in system administration and software development. More recently, I've
                            been exploring DevOps principles, and how I can apply them to my personal projects, and with my development background,
                            I found the mesh between operations and development to be a perfect fit for me.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-2">
                        <h1 className="text-xl font-bold underline">What do I do?</h1>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quia laborum vero totam, praesentium adipisci tempora voluptatem repellat aut dignissimos. Optio asperiores ex explicabo id, possimus consectetur autem nisi veritatis?
                        </p>
                    </div>
                    <div className="p-2">
                        <h1 className="text-xl font-bold underline">How do I do it?</h1>
                        <p>
                            Over the last few years, I've spent a lot of time learning and growing as a developer.
                            I've picked up quite a few technologies, and I'm always looking to learn more. But, the languages
                            and technologies I've worked with most extensively are:
                            <ul className="list-inside list-disc p-2 text-lg italic">
                                <li>Javascript, Express.js, React.js</li>
                                <li>AWS and Terraform</li>
                                <li>Containerization and development with Docker</li>
                                <li>Orchestration w/ Kubernetes</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container p-6 max-w-sm mx-auto sm:bg-none">
                <div className="flex mb-6 justify-center">
                    <div className="">
                        <div className="hidden md:flex content-center justify-left">
                            <img src="https://via.placeholder.com/1000x300" alt="profile picture" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-6 max-w-sm mx-auto bg-neutral-200 rounded-xl shadow-xl mb-6">
                <h1 className="text-xl font-bold">
                    What can I do for you?
                </h1>
                <div className="p-2 flex flex-col justify-center">
                    <p className="mb-6">
                        If you're looking for a developer who is passionate, flexible, curious, and dedicated (for better or worse), then you've
                        come to the right place! Take a look around my portfolio for a better ideao of what I can do, and feel free
                        to <b>contact me</b> and let me know how I can make your life easier.
                    </p>

                        <div className="bg-black p-5 bg-opacity-20 mx-2 rounded-lg">
                            <ul className="grid grid-cols-1 md:grid-cols-2 justify-center text-center">
                                <div className="px-3">
                                    <li className="">
                                        <a className="text-gray-800 hover:text-gray-600" href="https://www.linkedin.com/in/tlichfield/">
                                            <i className="fab fa-linkedin-in hover:text-white text-neutral-100 text-2xl md:text-4xl"></i>
                                        </a>
                                        <p className="hover:text-white text-neutral-100 text-base md:text-xl">linkedin.com/trevorlichfield</p>
                                    </li>
                                </div>
                                <div>
                                <li className="">
                                    <a className="text-gray-800 hover:text-white-600">
                                        <i className="fas fa-envelope hover:text-white text-neutral-100 text-2xl md:text-4xl"></i>
                                    </a>
                                    <p className="hover:text-white text-neutral-100 text-base md:text-xl">trevor.lichfield@lichfieldfamily.com</p>
                                </li>
                                </div>
                            </ul>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
