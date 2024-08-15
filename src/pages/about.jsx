const About = function () {

    return (
        <div>
            {
                /**
                 * !NOTES
                 * - keep nav lowercase, upper case headings and sentences
                 */
            }
            <div className="container max-w-sm mx-auto">
                <div className="flex justify-center about-background">
                    <div className="flex content-center justify-left p-8">
                        <img className="about-me" src="https://via.placeholder.com/200" alt="profile picture" />
                    </div>

                </div>
            </div>

            <div className="container p-6 max-w-sm mx-auto bg-neutral-200 rounded-xl shadow-xl">
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
                            When I'm not coding, you can find me anxiously watering my plants, rock climbing, playing video games, or
                            spending time with my girlfriend and our wonderful pets. I also enjoy a good iced coffee when the opportunity 
                            to have one presents itself. When I do have coffee, I aim to drink it whilst
                            on vacation, or somewhere far from home. I love to travel, and have recently been to Seattle, Washington which
                            I wholeheartedly recommend anyone <i>drive to</i> and visit.
                        </p>
                    </div>
                </div>
                <h1 className="text-xl font-semibold">Music</h1>
                <div className="p-2">
                    <p className="indent-3 mb-5">
                        I think music is very important to me. It's accompanied many emotions in my life and I think I have quite the taste. Below is a 
                        window into my soul, and also my favorite playlist of pre 2000's music I regularly listen to.
                    </p>
                    <iframe src="https://open.spotify.com/embed/playlist/0G7BnxP1X1M827QDhg0AB5?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        </div >
    )
}

export default About;