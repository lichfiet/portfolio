const About = function () {

    return (
        <div className="container mx-auto px-20">

            {/* Picture of me and background */}
            <div className="flex justify-center about-background dark:bg-neutral-600">
                <div className="flex content-center justify-left p-8">
                    <img className="about-me" src="https://via.placeholder.com/200" alt="profile picture" />
                </div>
            </div>

            {/* Content Start */}
            <div className="container mx-auto p-6 dark:bg-neutral-800 bg-neutral-200 rounded-xl shadow-xl">
                <h1 className="text-xl font-bold">
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
                        <p className="indent-3 mb-2">
                            When I'm not coding, you can find me watering my plants, rock climbing, playing video games, watching coding content, 
                            traveling, or drinking a good cup of coffe.
                        </p>
                    </div>
                </div>
                <div className="mt-4  justify-center content-center">
                    <h1 className='text-center mb-2 italic'>my tech stack</h1>
                    <div className="flex justify-center text-3xl gap-3 overflow-x-auto">
                        <i className="devicon-react-original"></i>
                        <i className="devicon-express-original"></i>
                        <i className="devicon-tailwindcss-original"></i>
                        <i className="devicon-amazonwebservices-plain-wordmark"></i>
                        <i className="devicon-terraform-plain"></i>
                        <i className="devicon-docker-plain"></i>
                        <i className="devicon-kubernetes-plain"></i>
                        <i className="devicon-argocd-plain"></i>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold">Music</h1>
                <p className="indent-3 mb-5">
                    I think music is very important to me. It's accompanied many emotions in my life and I think I have quite the taste. Below is a
                    window into my soul, and also my favorite playlist of pre 2000's music I regularly listen to.
                </p>

                <div className="grid grid-cols-2 gap-7">
                    <iframe src="https://open.spotify.com/embed/playlist/0G7BnxP1X1M827QDhg0AB5?utm_source=generator" width="100%" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/0G7BnxP1X1M827QDhg0AB5?utm_source=generator" width="100%" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        </div >
    )
}

export default About;