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
                    <div id="work-lightspeed" className="">
                        <h1 className="text-l font-medium">Lightspeed DMS LLC.</h1>
                        <div className="p-2">
                            <p className="text-base font-light">Customer Support Analyst II</p>
                            <p className="text-base font-light italic">Aug. 2022 - Now</p>
                            <p className="p-2 text-base">
                                <b>Responsibilities:</b> Provide front-end application support, including the creation and execution of
                                complex SQL queries for data validation and troubleshooting. Responsible for detailed bug reporting and
                                contributing to technical documentation. Engage in a wide range of tasks to enhance system reliability
                                and customer satisfaction.
                            </p>
                            <p className="text-base font-light">Customer Support Analyst I</p>
                            <p className="text-base font-light italic">Aug. 2022 - Now</p>
                            <p className="p-2 text-base">
                                <b>Responsibilities:</b> Provide front-end application support for the Accounting and Integration functiions of the software
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WorkExperience;