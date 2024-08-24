import '/background.png';

const HomePage = function () {

    return (
        <div className="flex-grow overflow-auto container mx-auto my-auto justify-center content-center px-0 lg:px-28 md:px-4 md:pb-28">
            <div className="block md:grid grid-cols-2 justify-center md:justify-start">
                <div className="content-center p-6">
                    <div className="flex content-center justify-center md:justify-start">
                        <img src="https://via.placeholder.com/250" alt="profile picture" />
                    </div>
                    <div className="flex justify-start">
                        <ul className="p-4 text-left ">
                            <li className="font-medium text-base lg:text-lg">Hey! <i className="font-light">My name is,</i></li>
                            <li className="text-xl lg:text-3xl italic hover:not-italic"><b>Trevor Lichfield</b>, 20 yrs. Old</li>
                            <li className="font-light text-base lg:text-lg italic underline">Fullstack & DevOps Engineer</li>
                        </ul>
                    </div>
                </div>
                <div className="p-6 bg-neutral-200 rounded-lg shadow-2xl flex justify-center flex-col">
                    <h1 className="md:text-base lg:text-lg font-bold text-center">
                        Who am I?
                    </h1>
                    <p className="indent-3 mb-2 text-sm lg:text-base">
                        I've always been interested in technology, starting
                        with my family's first computer, where I played a lot of classic computer games like
                        Roller Coaster Tycoon, and an early Roblox. Later, I would have my first
                        exposure to web development, modifying free HTML templates for an SEO project. I ended up taking
                        a simple Javascript class
                        in middle school, learned how to deploy Minecraft servers on docker with my dad, and have enjoyed
                        exploring new technologies in my current software support role ever since.
                    </p>
                    <div className="my-0 md:my-auto justify-center content-center">
                        <h1 className='text-center mb-2 italic'>my tech stack</h1>
                        <div class="flex justify-center text-3xl gap-3 overflow-x-auto">
                            <i class="devicon-react-original"></i>
                            <i class="devicon-express-original"></i>
                            <i class="devicon-tailwindcss-original"></i>
                            <i class="devicon-amazonwebservices-plain-wordmark"></i>
                            <i class="devicon-terraform-plain"></i>
                            <i class="devicon-docker-plain"></i>
                            <i class="devicon-kubernetes-plain"></i>
                            <i class="devicon-argocd-plain"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
