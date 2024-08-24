import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Make sure to import useState
import './background.css';


export function NavBar() {
    let navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

    function handleChange(value) {
        setSelectedOption(value);
    }

    useEffect(() => {
        if (selectedOption) {
            navigate(`/${selectedOption}`);
        }
    }, [selectedOption, navigate]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="backgroundimage flex flex-col min-h-screen">
            { /* NAVIGATION BAR FOR LARGER SCREENS */}
            <div className="p-6 justify-center items-center">
                <nav className="container flex flex-row items-center md:space-x-4 bg-neutral-200 p-3 px-4 lg:px-9 rounded-3xl shadow-xl w-full mx-auto">
                    <a onClick={() => handleChange("home")} className="text-md md:text-lg font-bold text-gray-800 cursor-pointer">
                        trevor lichfield
                    </a>
                    <ul className="flex space-x-4">
                        <li className="hidden md:block">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("home") }} className="text-gray-800 hover:text-gray-400 hidden md:block">
                                home
                            </a>
                        </li>
                        {/* <li className="hidden md:block">
                            <a href="#" onClick={() => handleChange("work-experience")} className="text-gray-800 hover:text-gray-400 hidden md:block">
                                work
                            </a>
                        </li> */}
                        <li className="hidden md:block">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("projects") }} className="text-gray-800 hover:text-gray-400 hidden md:block">
                                portfolio
                            </a>
                        </li>
                        <li className="hidden md:block">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("about") }} className="text-gray-800 hover:text-gray-400 hidden md:block">
                                about
                            </a>
                        </li>
                        <li className="hidden md:block">
                            <a className="text-gray-800 hover:text-gray-600 hidden md:block" href="https://github.com/lichfiet">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>


                        <li className="hidden md:block">
                            <a className="text-gray-800 hover:text-gray-600" href="https://www.linkedin.com/in/tlichfield/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="ml-auto mr-2 md:hidden">
                        
                        <li className="md:hidden">
                            <i className="fa-solid fa-bars" onClick={handleMenuToggle}></i>
                        </li>
                    </ul>
                </nav>
            </div >


            {
                /* MENU FOR SMALLER SCREENS */
            }
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <ul className="flex flex-col space-y-4 text-center">
                        <li>
                            <i className="fa-solid fa-x text-6xl text-white hover:text-gray-400" onClick={handleMenuToggle}></i>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("home"); handleMenuToggle() }} className="text-6xl text-white hover:text-gray-400">
                                home
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("about"); handleMenuToggle() }} className="text-6xl text-white hover:text-gray-400">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleChange("projects"); handleMenuToggle() }} className="text-6xl text-white hover:text-gray-400">
                                projects
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            <div className="flex flex-grow overflow-auto">
                <Outlet />
            </div>
    
        </div>
    );
}

export default NavBar;