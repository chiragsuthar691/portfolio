import Card from "./card";

const ExperienceCard = ({
  title,
  company,
  year,
  skills,
  desc,
}: {
  title: string;
  company: string;
  year: string;
  skills: string[];
  desc: string[];
}) => {
  return (
    <>
      <div className="border-2 border-slate-800 rounded-xl px-4 py-2 m-2 e-card">
        <div className="flex flex-col w-full">
          <h2 className="text-xl text-lime-300 font-bold">{title}</h2>
          <p className="flex text-lime-600 justify-between ">
            <span>{company}</span>
            <span>{year}</span>
          </p>
        </div>
        <ul className="mt-7">
          {desc?.map((x: string, i: number) => {
            return (
              <li key={i} className="list-disc ml-5">
                {x}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap mt-2">
          {skills?.map((x: string, i: number) => {
            return <Card key={i} title={x} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
