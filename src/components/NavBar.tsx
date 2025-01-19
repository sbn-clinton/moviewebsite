import Link from "next/link";
import { BiMoviePlay } from "react-icons/bi";
import { SheetDemo } from "./SheetDemo";

const NavBar = () => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-inherit bg-opacity-30 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="">
          <Link href={"/"} className="flex items-center  gap-1">
            <BiMoviePlay className=" w-5 h-5 text-[#FF4800]" />
            <div className="text-pretty ">
              <h1 className="text-lg font-extrabold tracking-tight leading-tight ">
                SBN
                <span className="text-xs font-light text-[#FF4800] italic">
                  moviez
                </span>
              </h1>
            </div>
          </Link>
        </div>
        <SheetDemo />
      </div>
    </div>
  );
};

export default NavBar;
