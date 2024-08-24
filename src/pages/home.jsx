import '/background.png';

const HomePage = function () {

    return (
        <div className="container mx-auto flex align-center justify-center min-h-svh">
            <div className="content-center justify-center px-0 lg:px-28 md:px-4 md:pb-28">
                <div className="block md:grid my-1 justify-center md:justify-start" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className="content-center">
                        <div className="flex content-center justify-center md:justify-start">
                            <img src="https://via.placeholder.com/250" alt="profile picture" />
                        </div>
                        <div className="flex justify-start">
                            <ul className="p-4 text-left ">
                                <li className="font-medium text-lg">Hey! <i className="font-light">My name is,</i></li>
                                <li className="text-4xl italic hover:not-italic"><b>Trevor Lichfield</b>, 20 yrs. Old</li>
                                <li className="font-light text-xl italic underline">Fullstack & DevOps Engineer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 bg-neutral-300 rounded-xl shadow-xl">
                        <h1 className="text-xl font-bold text-center">
                            About Me
                        </h1>
                        <div className="p-2">
                            <div id="work-lightspeed" className="">
                                <p className="indent-3 mb-2">
                                    I've always been interested in technology, starting
                                    with my family's first computer, where I played a lot of classic computer games like
                                    Roller Coaster Tycoon, and an early Roblox. Later, I would have my first
                                    exposure to web development, modifying free HTML templates for an SEO project. I ended up taking
                                    a simple Javascript class
                                    in middle school, learned how to deploy Minecraft servers on docker with my dad, and have enjoyed
                                    exploring new technologies in my current software support role ever since.
                                </p>
                            </div>
                <h1 className='text-center mb-1 italic'>my tech stack</h1>
                <div class="scrolling-wrapper text-4xl gap-8">
                    <i class="devicon-amazonwebservices-plain-wordmark"></i>
                    <i class="devicon-tailwindcss-original"></i>
                    <i class="devicon-express-original"></i>
                    <i class="devicon-react-original"></i>
                    <i class="devicon-terraform-plain"></i>
                    <i class="devicon-argocd-plain"></i>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
