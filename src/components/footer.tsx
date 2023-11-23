import DownloadCV from "./downloadCV";
import { GoHeartFill } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaSquarePhone } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        id="contact"
        className="p-5 flex flex-col justify-between items-center"
      >
        <DownloadCV />
        <div className="mt-3 text-center">
          <h2 className="text-3xl font-bold m-2">Contact Links</h2>
          <ul className="p-2 mb-10 mt-3 flex justify-center items-center gap-5">
            <li className="cursor-pointer">
              <Link href={"/"}>
                <ImLinkedin color={"#fbbf24"} size="35" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/"}>
                <GrInstagram color={"#ef4444"} size="35" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/"}>
                <BsFacebook color={"#2dd4bf"} size="35" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/"}>
                <FaSquarePhone color={"#ec4899"} size="35" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/"}>
                <MdEmail color={"#8b5cf6"} size="38" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="mt-3 p-10 flex w-full justify-between items-center bg-lime-300 text-slate-950">
        <p>@ Pavan Suthar</p>
        <p>
          Design and Created with{" "}
          <GoHeartFill
            color={"#dc2626"}
            size="25"
            className="inline-block animate-beat-1"
          />
        </p>
      </div>
    </>
  );
};

export default Footer;
