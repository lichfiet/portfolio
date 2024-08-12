import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Make sure to import useState

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

    return (
        <>
            <div className="flex justify-center items-center mb-4 p-6">
                <nav className="flex items-center space-x-4 bg-neutral-200 p-3 px-9 rounded-3xl shadow-sm">
                    <a onClick={() => handleChange("home")} className="text-xl font-bold text-gray-800 cursor-pointer">
                        trevor lichfield
                    </a>
                    <ul className="flex space-x-4 lg:visible md:invisible">
                        <li>
                            <a href="#" onClick={() => handleChange("home")} className="text-gray-800 hover:text-gray-600">
                                home
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange("about")} className="text-gray-800 hover:text-gray-600">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange("work-experience")} className="text-gray-800 hover:text-gray-600">
                                work
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange("projects")} className="text-gray-800 hover:text-gray-600">
                                projects
                            </a>
                        </li>
                    </ul>
                    <ul className="flex ml-3 space-x-2">
                        <li>
                            <a className="text-gray-800 hover:text-gray-600" href="https://github.com/lichfiet">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-800 hover:text-gray-600" href="https://www.linkedin.com/in/tlichfield/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;