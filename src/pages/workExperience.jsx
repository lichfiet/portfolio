const WorkExperience = function () {

    return (
        <div>
            {
                /**
                 * !NOTES
                 * - keep nav lowercase, upper case headings and sentences
                 */
            }

            <div className="container p-6 max-w-med mx-auto bg-neutral-200 rounded-xl shadow-xl">
                <h1 className="text-xl font-bold">
                    Work Experience
                </h1>
                <div className="p-2">
                    <div id="work-lightspeed" className="grid" style={{ gridTemplateColumns: "1fr 50fr" }}>
                        <div className="bg-black w-0.5 mt-3 mb-3">

                        </div>
                        <div className="p-2">
                            <h1 className="text-l font-medium">Lightspeed DMS LLC.</h1>
                            <p className="text-sm md:text-base font-light">Customer Support Analyst II</p>
                            <p className="text-sm md:text-base font-light italic">Aug. 2022 - Now</p>
                            <p className="p-2 text-sm md:text-base">
                                <b>Responsibilities:</b> Provide front-end application support, including the creation and execution of
                                complex SQL queries for data validation and troubleshooting. Responsible for detailed bug reporting and
                                contributing to technical documentation. Engage in a wide range of tasks to enhance system reliability
                                and customer satisfaction.
                            </p>
                            <p className="text-sm md:text-base font-light">Customer Support Analyst I</p>
                            <p className="text-sm md:text-base font-light italic">Aug. 2022 - Now</p>
                            <p className="p-2 text-sm md:text-base">
                                <b>Responsibilities:</b> Provide front-end application support for the Accounting and Integrations 
                                the DMS offerred. Author SQL queries to validate data and troubleshoot issues.
                            </p>
                        </div>
                    </div>
                    <div id="work-starbucks" className="grid" style={{ gridTemplateColumns: "1fr 50fr" }}>
                        <div className="bg-black w-0.5 mt-3 mb-3">
                        </div>
                        <div className="p-2">
                            <h1 className="text-l font-medium">Starbucks Coffee Company</h1>
                            <p className="text-sm md:text-base font-light">Customer Support Analyst II</p>
                            <p className="text-sm md:text-base font-light italic">Aug. 2021 - Aug. 2022</p>
                            <p className="p-2 text-sm md:text-base">
                                <b>Responsibilities:</b> Work for extended periods of time in a fast-paced environment with a 
                                focus on maintaining consistency and efficiency. Communicate with customers in a welcoming way 
                                to foster a sense of community and inclusivity amongst our location’s customer-base. Operate a 
                                complex POS system with many options, while simultaneously interpreting the colloquial terms 
                                used to describe our products and options. Work in a team setting where cooperation and 
                                communication is key to ensure efficiency and quality of the goods produced.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WorkExperience;