import Image from "next/image";
import profile from "../assets/3d12.png";

const Hero = () => {
  return (
    <>
      <main className="p-5 min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5 hero">
        <div className="flex flex-col justify-center items-center">
          <div className="p-title">
            <h1 className="text-7xl font-bold">Pavan Suthar</h1>
            <h3 className="text-2xl font-medium">
              Experienced MERN Stack Developer
            </h3>
            <p className="mt-5 text-lime-500 dark:text-lime-300">
              Let’s work together on your next project
            </p>
          </div>
        </div>
        <div className="p-5 flex justify-center items-center profile-img overflow-hidden">
          <Image
            className="w-100 h-100 rounded-2xl"
            // className="w-100 h-100 rounded-2xl shadow-gray-800 shadow-2xl"
            src={profile}
            alt="Profile"
            width={800}
            height={1000}
          />
        </div>
      </main>
    </>
  );
};

export default Hero;

// text-cyan-400 text-violet-700
