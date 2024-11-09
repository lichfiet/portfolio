import '/background.png';
import { useNavigate } from "react-router-dom";

const HomePage = function () {
    const navigate = useNavigate();

    return (
        <div className="flex-grow overflow-auto container mx-auto my-auto justify-center content-center px-0 lg:px-28 md:px-4 md:pb-28">
            <div className="block md:grid grid-cols-2">
                <div className="content-center p-6">
                    <div className="flex content-center justify-center">
                        <img src="https://via.placeholder.com/250" alt="profile picture" />
                    </div>
                    <div className="flex justify-center">
                        <ul className="p-4 text-left">
                            <li className="font-medium text-base lg:text-lg">Hey! <i className="font-light">My name is,</i></li>
                            <li className="text-xl lg:text-3xl italic hover:not-italic"><b>Trevor Lichfield</b></li>
                            <li className="font-light text-base lg:text-lg italic underline">Fullstack SWE & DevOps Engineer</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center content-center mx-5 md:mx-10">
                    <div className="p-6 my-auto dark:bg-neutral-800 bg-neutral-200 rounded-lg shadow-2xl flex flex-col h-fit">
                        <h1 className="md:text-base lg:text-lg font-bold text-center">
                            Where am I?
                        </h1>
                        <p className="indent-3 mb-2 text-sm lg:text-base">
                            Well, first, thanks for stopping by! This website is supposed to serve as a home for all my projects and
                            things I've worked on over my years so you can take a look at em'. 
                        </p>
                        <p className='p-1 text-center text-black dark:text-white'>
                            <a href="./projects" onClick={(e) => { }} className="underline font-semibold">My Projects</a>
                        </p>
                        <p className='p-1 text-center text-black dark:text-white'>
                            <a href="./about" onClick={(e) => { }} className="underline font-semibold">Read About Me</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
