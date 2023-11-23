const Card = ({ title }: { title: string }) => {
  return (
    <>
      <div className="border-2 border-lime-300 px-4 rounded-full py-2 m-1 text-sm">
        {title}
      </div>
    </>
  );
};

export default Card;
