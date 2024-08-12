const About = function () {

    return (
        <div>
            {
                /**
                 * !NOTES
                 * - keep nav lowercase, upper case headings and sentences
                 */
            }
            <div className="container p-6 max-w-med mx-auto">
                <div className="flex mb-10 justify-center">
                    <div className="flex content-center justify-left">
                        <img src="https://via.placeholder.com/1000x400" alt="profile picture" />
                    </div>

                </div>
            </div>

            <div className="container p-6 max-w-med mx-auto bg-neutral-200 rounded-xl shadow-xl">
                <h1 className="text-xl font-bold">
                    About Me
                </h1>
                <div className="p-2">
                    <div id="work-lightspeed" className="">
                        <p className="text-base font-base">Meow meow meow</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;