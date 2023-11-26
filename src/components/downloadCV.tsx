import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <>
      <section className="p-5 h-56 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold m-2">Download CV</h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center flex">
            Click below link{" "}
            <span className="inline-block animate-bounce">
              <FaHandPointDown color={"#84cc16"} size="25" />
            </span>
          </p>
          <Link
            href={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xg7kru53uUjC5sT1gmdT6lLT8uK9Z9iBMwIi2xSMfvt7C0rLIDSa55sPGzN1n2xhLJw&usqp=CAU"
            }
            className="text-center mt-4 dynamic-color text-3xl font-bold"
          >
            PAVAN SUTHAR
          </Link>
        </div>
      </section>
    </>
  );
};

export default DownloadCV;
