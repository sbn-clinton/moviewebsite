"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgeInfo, ContactIcon, Film, Tv, Videotape } from "lucide-react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export function SheetDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <GiHamburgerMenu className="w-5 h-5" onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent className="bg-inherit px-0 pl-1 border-stone-700">
        <SheetTitle className="w-[80%] bg-inherit text-white flex flex-col gap-2 justify-between">
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
                  onClick={handleClose}
                  className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
                >
                  <p className="text-sm  font-semibold"> Most Popular</p>
                </Link>
                <Link
                  href={"/movies/topboxoffice"}
                  onClick={handleClose}
                  className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
                >
                  <p className="text-sm  font-semibold"> Top Box Office</p>
                </Link>
                <Link
                  href={"/movies/top250movies"}
                  onClick={handleClose}
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
                  onClick={handleClose}
                  className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
                >
                  <p className="text-sm  font-semibold"> Most Popular</p>
                </Link>

                <Link
                  href={"/tvshows/top250tvshows"}
                  onClick={handleClose}
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
                  onClick={handleClose}
                  className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
                >
                  <p className="text-sm  font-semibold">Top Rated</p>
                </Link>

                <Link
                  href={"/indianmovies/mostanticipated"}
                  onClick={handleClose}
                  className="flex items-center px-2 py-1  hover:bg-stone-600 text-stone-400 hover:text-white rounded-lg cursor-pointer"
                >
                  <p className="text-sm  font-semibold"> Most Anticipated</p>
                </Link>
                <Link
                  href={"/indianmovies/trendingnow"}
                  onClick={handleClose}
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
              onClick={handleClose}
              className="flex items-center gap-2 px-2 py-1 text-stone-400 hover:text-white hover:bg-stone-600 rounded-lg cursor-pointer"
            >
              <BadgeInfo className="w-4 h-4 " />
              <span className="text-sm font-semibold">About Us</span>
            </Link>
            {
              <Link
                href="/contact"
                className="flex items-center gap-2 px-2 w-full py-2 text-stone-400 hover:text-white hover:bg-stone-600 rounded-lg cursor-pointer"
                onClick={handleClose}
              >
                <ContactIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">Contact Us</span>
              </Link>
            }
            <p className="text-sm text-stone-400 font-light">
              © 2025 <span className="font-bold text-[#FF4800]">SBN</span>
              <span className="text-xs text-stone-200 font-extralight italic">
                moviez
              </span>{" "}
              All rights reserved.
            </p>
          </div>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
