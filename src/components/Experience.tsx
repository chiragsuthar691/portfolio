import ExperienceCard from "./experienceCard";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="flex flex-col py-10 justify-between items-center p-5 experience"
      >
        <div>
          <h1 className="text-4xl font-bold m-2">Experience</h1>
        </div>
        <div className="flex w-full gap-5 justify-center items-center flex-col m-5">
          <ExperienceCard
            title={"Sr. Nodejs developer"}
            company={"Codezee Solutions Pvt. Ltd."}
            year="2022 - Present"
            desc={[
              "Experienced in MERN stack development, specializing in Node.js, Express.js, MongoDB, and Mongoose to create robust RESTful APIs and back-end solutions.",
              "Implemented user validation, permissions, and hash code generation using Node.js, fortifying application security.",
              "Currently leading a CRM system and website development project for 'Best Parties Ever - Eventist Group', achieving signigicant performance improvements and optimized response times for enhanced user experience.",
              "Actively ensured project success through daily SCRUM meetings, efficient management, and on-time deliveries.",
            ]}
            skills={[
              "Nodejs",
              "Express",
              "Firebase",
              "MongoDB",
              "Mongoose",
              "JWT Tokens",
              "DSA",
            ]}
          />
          <ExperienceCard
            title={"Reactjs developer"}
            company={"Pixer Digital"}
            year="2020 - 2022"
            desc={[
              "Developed CRM and ERP web applications and enhanced speed by reducing data load.",
              "Developed the latest user-facing features using React.js and built reusable components & front-end libraries for future use.",
              "Experience on Code, Functional and architectural reviews. Monitored and improved front-end performance by 25% and documented application changes & worked on updates.",
              "Troubleshoot interface software and debugged application codes to improve functionality and performance by 50%.",
            ]}
            skills={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Reactjs",
              "Redux",
              "React-Redux",
              "Local Database",
              "Styled Components",
              "Material UI",
              "Bootstrap",
            ]}
          />
          <ExperienceCard
            title={"Data Analyst"}
            company={"DataLynx"}
            year="2019 - 2020"
            desc={[
              "Developed Power BI reports for diverse industry departments using Excel data and automated HR, Maintenance, and Production Excel templates.",
              "Suggested ways to improve machine efficiency by 15%.",
              "Another tasks includes:Industries Field Survey, To approach industries, Data Collection, Administrative Work, To suggest systematic improvments.",
            ]}
            skills={["Excel", "Power Point", "Power BI"]}
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
