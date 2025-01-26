import '/background.png';
import { useNavigate } from "react-router-dom";

const HomePage = function () {
    const navigate = useNavigate();

    return (
        <div className="flex-grow overflow-auto container mx-auto mb-20 justify-center content-center lg:px-48 md:px-16">
            <div className="block lg:grid grid-cols-2">
                <div className="content-center p-4">
                    <div className="flex content-center justify-center">
                        <img src='https://via.assets.so/img.jpg?w=200&h=200' alt="profile picture" className='w-48 h-48 md:w-60 md:h-60'/>
                    </div>
                    <div className="justify-center mt-4">
                        <ul className="text-left px-4">
                            <li className="font-base text-base lg:text-lg items-end">
                                <p className="inline font-medium">
                                    Hi, i'm <b className='text-xl lg:text-3xl italic'>Trevor Lichfield,</b>
                                    a Cloud & Devops Engineer, utilizing my development experience, and love of operations, to reduce the workload of maintaining and deploying software products.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center content-center mx-5 md:mx-10">
                    <div className="my-auto flex flex-col h-fit">
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="./projects" onClick={(e) => { }} className='hover:font-bold'>/<i>projects</i></a>
                        </p>
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="./about" onClick={(e) => { }} className='hover:font-bold'>/<i>about</i></a>
                        </p>
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="https://github.com/lichfiet" onClick={(e) => { }} className='hover:font-bold'>/<i>github</i></a>
                        </p>
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="https://www.linkedin.com/in/trevorlichfield/" onClick={(e) => { }} className='hover:font-bold'>/<i>linkedin</i></a>
                        </p>
                    </div>
                </div>
            </div>
            <hr className='bg-black h-0.5 px-4 dark:bg-white w-full my-6'></hr>
            <div>
                <h1 className='text-center text-3xl font-medium'>My latest and greatest!</h1>
                <div className='p-4 grid grid-cols-3 content-center text-left mx-10 mt-8 dark:bg-neutral-800 bg-neutral-200 mb-10 shadow-2xl rounded-3xl'>
                    <div className='m-2 p-3'>
                        <img src='./explorer.png' className='w-full h-36'></img>
                        <h3 className='relative bottom-0 font-medium text-2xl dark:bg-neutral-600 bg-neutral-400 p-1'>
                            File Explorer
                        </h3>
                    </div>
                    <div className='m-2 p-2'>
                        <img src='https://via.assets.so/img.jpg?w=300&h=130' className='w-full h-36'></img>
                        <h3 className='relative bottom-0 font-medium text-2xl dark:bg-neutral-600 bg-neutral-400 p-1'>
                            On-Call Tool
                        </h3>
                    </div>
                    <div className='m-2 p-3'>
                        <img src='https://via.assets.so/img.jpg?w=300&h=130' className='w-full h-36'></img>
                        <h3 className='relative bottom-0 font-medium text-2xl dark:bg-neutral-600 bg-neutral-400 p-1'>
                            Python Automations
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
