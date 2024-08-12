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
                        <div className="hidden md:flex content-center justify-left">
                            <img src="https://via.placeholder.com/200" alt="profile picture" />
                        </div>
                        <div className="flex items-end justify-start">
                            <ul className="p-4 text-left">
                                <li><b>Trevor Lichfield</b>, <i>20 yrs. Old</i></li>
                                <li>Fullstack & Devops Engineer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-6 max-w-sm mx-auto bg-neutral-200 rounded-xl shadow-xl">
                <h1 className="text-xl font-bold">
                    Who am I?
                </h1>
                <div className="p-2">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates pariatur eius non nihil. Non corrupti doloribus illo velit eligendi fugiat ab reprehenderit, natus perspiciatis dolorum deserunt. Harum non itaque nostrum.
                </div>
                <h1 className="text-xl font-bold">
                    Why should you care?
                </h1>
                <div className="p-2">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates pariatur eius non nihil. Non corrupti doloribus illo velit eligendi fugiat ab reprehenderit, natus perspiciatis dolorum deserunt. Harum non itaque nostrum.
                </div>
            </div>
        </div>
    );
};

export default HomePage;
