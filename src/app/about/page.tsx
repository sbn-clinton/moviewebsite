import { FaPaperPlane } from "react-icons/fa";
import { SiGithubsponsors } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10 py-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className="md:text-xl font-bold text-slate-200">About Us</h1>
          <Link
            href={"/contact"}
            className="bg-[#FF4800] text-white btn btn-xs md:btn-sm hover:bg-[#FF4800]/50 flex"
          >
            Contact Us
          </Link>
        </div>
        <hr className="border-stone-700 w-full" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex flex-col gap-6  md:w-1/2">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-sm md:text-lg font-bold text-stone-200">
                About Us
              </h1>
              <p className="text-xs md:text-sm text-stone-400 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                modi quos quo est sapiente iusto praesentium facere, incidunt
                labore, libero nihil debitis, architecto nulla magni quis veniam
                veritatis officiis alias!
              </p>
              <p className="text-xs md:text-sm text-stone-400 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                explicabo beatae dolor totam, exercitationem quis distinctio
                possimus velit dolorum optio facilis, reiciendis necessitatibus
                ratione quod, neque quasi?
              </p>
              <p className="text-xs md:text-sm text-stone-400 font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam ea placeat cumque excepturi provident beatae omnis?
                Sapiente aspernatur ducimus laboriosam quibusdam temporibus
                explicabo.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-sm md:text-lg font-bold text-stone-200">
                A Sponsor
              </h1>
              <p className="text-xs md:text-sm text-stone-400 font-light">
                Open for sponsorships
              </p>
              <button className="btn bg-inherit text-stone-300 hover:bg-inherit border-stone-600 btn-sm  w-fit rounded-badge text-xs md:text-sm">
                <SiGithubsponsors className="w-3 h-3 md:w-4 md:h-4" />A Sponsor
              </button>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-sm md:text-lg font-bold text-stone-200">
                Submit
              </h1>
              <p className="text-xs md:text-sm text-stone-400 font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda, illo exercitationem. Incidunt provident nobis,
                impedit quas nesciunt magnam, minima consequatur suscipit quidem
                cum architecto inventore.
              </p>
              <button className="btn bg-inherit text-stone-300 hover:bg-inherit border-stone-600 btn-sm  w-fit rounded-badge  text-xs md:text-sm">
                Submit
                <FaPaperPlane className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-start md:w-1/2">
            <Image
              src="/images/about.png"
              alt="about"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
