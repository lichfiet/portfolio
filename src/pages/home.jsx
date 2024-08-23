import '/background.png';

const HomePage = function () {

    return (
        <div className="flex justify-center content-center h-full">
            <div className="container content-center justify-center mb-10 px-20 mx-auto">
                <div className="block md:grid my-5 md:my-10 justify-center md:justify-start" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className="content-center">
                        <div className="md:flex content-center justify-start">
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
                    <div className="p-6 bg-neutral-200 rounded-xl shadow-xl">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
