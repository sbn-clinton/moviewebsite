import { BadgeInfo, Film, Tv, Videotape } from "lucide-react";
import Link from "next/link";
import { BiMoviePlay } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className=" w-[20%] hidden md:inline-block fixed z-50">
      <div className="flex flex-col min-h-screen justify-between py-4 gap-4 border-r border-stone-700 px-2">
        <div className="flex px-2">
          <Link href={"/"} className="flex items-center  gap-1">
            <BiMoviePlay className=" w-6 h-6 text-[#FF4800]" />
            <div className="text-pretty ">
              <h1 className="text-xl font-extrabold tracking-tight leading-tight ">
                SBN
                <span className="text-sm font-light text-[#FF4800] italic">
                  moviez
                </span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 flex-grow ">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center px-2 py-2 ">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 " />

                <span className="text-sm font-semibold">Movies</span>
              </div>
              <hr className="border-stone-700 w-full" />
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href={"/movies/mostpopular"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Most Popular</p>
              </Link>
              <Link
                href={"/movies/topboxoffice"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Top Box Office</p>
              </Link>
              <Link
                href={"/movies/top250movies"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Top 250 Movies</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center px-2 py-2   ">
              <div className="flex items-center gap-2 text-nowrap">
                <Tv className="w-4 h-4 " />

                <span className="text-sm font-semibold">TV Shows</span>
              </div>
              <hr className="border-stone-700 w-full" />
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href={"/tvshows/mostpopular"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Most Popular</p>
              </Link>

              <Link
                href={"/tvshows/top250tvshows"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Top 250 Movies</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center px-2 py-2   ">
              <div className="flex items-center gap-2 text-nowrap">
                <Videotape className="w-4 h-4 " />

                <span className="text-sm font-semibold">Indian Movies</span>
              </div>
              <hr className="border-stone-700 w-full" />
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href={"/indianmovies/toprated"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold">Top Rated</p>
              </Link>

              <Link
                href={"/indianmovies/mostanticipated"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Most Anticipated</p>
              </Link>
              <Link
                href={"/indianmovies/trendingnow"}
                className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              >
                <p className="text-sm  font-semibold"> Trending Now</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <hr className="border-stone-700 w-full" />
          <Link
            href={"/about"}
            className="flex items-center gap-2 px-2 py-1 text-stone-400 hover:text-white hover:bg-stone-600 rounded-lg cursor-pointer"
          >
            <BadgeInfo className="w-4 h-4 " />
            <span className="text-sm font-semibold">About Us</span>
          </Link>
          <p className="text-sm text-stone-400 font-light">
            © 2025 <span className="font-bold text-[#FF4800]">SBN</span>
            <span className="text-xs text-stone-200 font-extralight italic">
              moviez
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
