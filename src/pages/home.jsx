import '/background.png';
import { useNavigate } from "react-router-dom";

const HomePage = function () {
    const navigate = useNavigate();

    return (
        <div className="flex-grow overflow-auto container mx-auto my-auto justify-center content-center px-0 lg:px-28 md:px-4 md:pb-28">
            <div className="block lg:grid grid-cols-2">
                <div className="content-center p-6">
                    <div className="flex content-center justify-center">
                        <img src="https://via.placeholder.com/250" alt="profile picture" />
                    </div>
                    <div className="justify-center">
                        <ul className="m-16 text-left p-4">
                            <li className="font-medium text-base lg:text-lg items-end">
                                <i className="font-light pr-1">Hi, i'm</i>
                                <p className="text-xl lg:text-3xl italic inline"><b>Trevor Lichfield,</b>
                                <p className='inline text-base font-light'> a Cloud & Devops Engineer, utilizing my development experience, and love of operations, to reduce the workload of maintaining and deploying software products.</p></p></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center content-center mx-5 md:mx-10">
                    <div className="p-6 my-auto flex flex-col h-fit">
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="./projects" onClick={(e) => { }}>/<i>projects</i></a>
                        </p>
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="./about" onClick={(e) => { }}>/<i>about</i></a>
                        </p>
                        <p className='text-5xl p-2 text-center text-black dark:text-white'>
                            <a href="https://github.com/lichfiet" onClick={(e) => { }}>/<i>github</i></a>
                        </p>
                        <p className='text-6xl p-2 text-center text-black dark:text-white'>
                            <a href="./about" onClick={(e) => { }}>/<i>linkedin</i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
