import Card from "./card";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="p-5 py-10 flex flex-col justify-between items-center skills overflow-x-hidden"
      >
        <div>
          <h1 className="text-4xl font-bold m-2">Skills</h1>
        </div>
        <div className="flex flex-col m-5 w-full overflow-x-hidden">
          <div className="">
            <h3 className="text-xl font-medium m-2 text-center">
              Fronted Development
            </h3>
            <div className="animate-marquee-ltr w-fit flex justify-center items-center">
              <Card title={"HTML5"} />
              <Card title={"CSS3"} />
              <Card title={"Bootstrap"} />
              <Card title={"JavaScript"} />
              <Card title={"React"} />
              <Card title={"Material UI"} />
              <Card title={"Styled Components"} />
              <Card title={"Redux"} />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-medium m-2 text-center">
              backend Development
            </h3>
            <div className="animate-marquee-rtl w-fit flex justify-center items-center">
              <Card title={"Nodejs"} />
              <Card title={"Express"} />
              <Card title={"MongoDB"} />
              <Card title={"Mongoose"} />
              <Card title={"JWT Tokens"} />
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-medium m-2 text-center">
              Other Skills
            </h3>
            <div className="animate-marquee-ltr w-fit flex justify-center items-center">
              <Card title={"Advanced DSA"} />
              <Card title={"Firebase Services"} />
              <Card title={"Local Database"} />
              <Card title={"Excel"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
