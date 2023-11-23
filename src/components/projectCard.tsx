const ProjectCard = ({ title }: { title: string }) => {
  return (
    <>
      <div className="border-2 border-slate-800 hover:border-lime-200 w-64 h-56 flex justify-center items-center rounded-xl px-4 py-2 m-2">
        {title}
      </div>
    </>
  );
};

export default ProjectCard;
