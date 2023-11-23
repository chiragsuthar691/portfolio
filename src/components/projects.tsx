import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="p-5 flex py-10 flex-col justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold m-2">Projects</h1>
        </div>
        <div className="flex flex-col m-5">
          <div className="grid grid-cols-1 gap-5 max-[640px]:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 max-xl:grid-cols-7 overflow-auto">
            <ProjectCard title={"Arya Accountings"} />
            <ProjectCard title={"Arya Accountings"} />
            <ProjectCard title={"Arya Accountings"} />
            <ProjectCard title={"Arya Accountings"} />
            <ProjectCard title={"Arya Accountings"} />
            <ProjectCard title={"Arya Accountings"} />
            <ProjectCard title={"Arya Accountings"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
