import '/background.png';
import { useNavigate } from "react-router-dom";

const HomePage = function () {
    const navigate = useNavigate();

    return (
        <div className="flex-grow overflow-auto container mx-auto my-auto justify-center content-center px-0 lg:px-28 md:px-4 md:pb-28">
            <div className="block lg:grid grid-cols-2 m-4 md:m-16">
                <div className="content-center p-4 ">
                    <div className="flex content-center justify-center">
                        <img src="./el.jpg" alt="profile picture" className='w-48 h-48 md:w-60 md:h-60'/>
                    </div>
                    <div className="justify-center mt-4">
                        <ul className="text-left p-4">
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
        </div>
    );
};

export default HomePage;
