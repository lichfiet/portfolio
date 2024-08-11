const HomePage = function () {

    return (
        <div className="">
            {
                /**
                 * !NOTES
                 * - keep nav lowercase, upper case headings and sentences
                 */
            }

            <div className="p-10 max-w-med mx-auto rounded-xl">
                <div className="flex mt-20 mb-10 justify-end">
                    <div className="md:grid-cols-2 grid sm:grid-cols-1">
                        <div className="flex items-end justify-end">
                            <ul className="p-4 text-right">
                                <li><b>Trevor Lichfield</b>, <i>20 yrs. Old</i></li>
                                <li>Customer Support Associate</li>
                            </ul>
                        </div>
                        <div className="flex content-center justify-left">
                            <img src="https://via.placeholder.com/300" alt="profile picture" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="p-6 max-w-med mx-auto bg-white rounded-xl shadow-xl">
                <div>
                    <h1 className="text-xl font-bold">
                        Work Experience
                    </h1>
                    <div>
                        <div className="p-2">
                            <h1 className="text-l font-medium">Lightspeed DMS LLC.</h1>
                            <p className="text-base font-light">Customer Support Analyst II</p>
                            <p className="text-base font-light italic">Aug. 2022 - Now</p>
                            <p className="p-2 text-base">
                                <b>Responsibilities:</b> Provide front-end application support, including the creation and execution of
                                complex SQL queries for data validation and troubleshooting. Responsible for detailed bug reporting and
                                contributing to technical documentation. Engage in a wide range of tasks to enhance system reliability
                                and customer satisfaction.
                            </p>
                            <p className="p-2 text-base">
                                <b>Accomplishments:</b>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Authored a comprehensive SQL diagnostic to save time in troubleshooting and identifying
                                        over 50 known product issues.
                                        <b><i> Read more</i></b>
                                    </li>
                                    <li>
                                        Became a subject matter expert in most functions of the Lightspeed DMS software, and work to provide
                                        application support for the entire customer base.
                                    </li>
                                </ul>
                            </p>
                        </div>

                    </div>

                    <p className="p-2 text-base">
                        Prior work experience extends to food and beverage service, and recreational sport
                        refereeing. Outside of the professional work envrionment, I've worked heavily in digital media utilizing the Adobe Creative Cloud suite, as well as 3D Animation
                        and design programs to make digital advertisements for personal and professional use. <a href="background.html" className=""><b>Continue Reading...</b></a>
                    </p>
                    <p className="p-2 text-base">
                        Personal development of skills has been fostered through an interests in game server configurations and setup,
                        which naturally led to insterests in hosting solutions and service management. I started with learning command-line CentOS Linux, and naturally started experimenting with
                        containerized applications and deployment using Docker Compose, and container orechastration via.
                        MiniKube. <a href="background.html" className=""><b>Continue Reading...</b></a>
                    </p>
                </div>
                <div className="container">
                    <div className="container">
                        <h1 className="text-xl font-bold">
                            about me
                        </h1>
                        <p className="">
                            On the weekends <i>and sometimes weekdays,</i> I enjoy Bouldering, Video Games, Art, and Programming.
                            I'm a huge fan of music of all genres, though music from the 60s-90s will always come out on top in my opinion. Sam Cooke, The Smiths, Paul Simon, and
                            Etta James are a few of my favorite artists. You can find my playlist on my "about me" page. <a href="background.html" className=""><b>Go to...</b></a>
                        </p>
                        <p className="" >
                            <a href="background.html" className=""><b>link in paragraph</b></a>.
                        </p>
                    </div>

                    <h3 className="overrideHeading">Skills and Proficiencies</h3>

                    <ul className="">
                        <h4 className="overrideHeading">Programming</h4>
                        <ul className=""><p className=""><b>Front End Web Development:</b> HTML, CSS, React</p></ul>
                        <ul className=""><p className=""><b>RESTful API Development:</b> Express.js with Node</p></ul>
                        <ul className=""><p className=""><b>Querying Languages:</b> Postgres SQL and other MySQL derivatives</p></ul>
                    </ul>

                    <ul className="">
                        <h5 className="overrideHeading">Project Management & Support</h5>
                        <ul className="list"><p className=""><b>Project Management Tools:</b> Salesforce and Task Ray</p></ul>
                        <ul className="list"><p className=""><b>CRM:</b> Clarify CRM and Sales Force</p></ul>
                    </ul>

                    <ul className="">
                        <h5 className="overrideHeading">Digital Media</h5>
                        <ul className="list"><p className=""><b>Graphic Design & Video:</b> Adobe Photoshop, Adobe Lightroom, Adobe Premiere, Adobe After Effects</p></ul>
                        <ul className="list"><p className=""><b>3D Modeling & Animation:</b> Blender, Cinema4D</p></ul>
                        <ul className="list"><p className="secondary">Novel Artist</p></ul>
                    </ul>


                </div>
            </div>
        </div >
    )
}

export default HomePage;