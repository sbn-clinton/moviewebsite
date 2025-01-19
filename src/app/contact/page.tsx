import { Card } from "@/components/ui/card";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10 py-3 px-4">
        <div className="flex  items-center">
          <h1 className=" md:text-xl font-bold text-slate-200">Contact Us</h1>
        </div>
        <hr className="border-stone-700 w-full" />
        <div className="flex flex-col gap-6 md:gap-10 items-center justify-center">
          <Card className="flex items-center justify-center  p-2 bg-inherit border-stone-700 w-fit">
            <form className="flex flex-col gap-2 md:gap-4">
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-sm md:text-lg font-bold text-stone-200">
                  Full Name
                </h1>
                <div className="flex gap-2 md:gap-4 ">
                  <div className="w-1/2 flex flex-col gap-1 md:gap-2">
                    <input
                      type="text"
                      className="input bg-inherit  border-stone-700 input-xs md:input-md input-bordered w-full text-stone-200"
                    />
                    <p className="text-xs  text-stone-400 font-light">
                      First Name
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1 md:gap-2">
                    <input
                      type="text"
                      className="input bg-inherit  border-stone-700 input-xs md:input-md input-bordered w-full text-stone-200"
                    />
                    <p className="text-xs  text-stone-400 font-light">
                      Last Name
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-sm md:text-lg font-bold text-stone-200">
                  Email
                </h1>
                <div className="flex flex-col gap-2 md:gap-4 ">
                  {" "}
                  <input
                    type="text"
                    className="input input-bordered bg-inherit  border-stone-700 input-xs md:input-md w-full text-stone-200"
                  />
                  <p className="text-xs  text-stone-400 font-light">
                    example@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-sm md:text-lg font-bold text-stone-200">
                  Message
                </h1>
                <div className="flex flex-col gap-2 md:gap-4 ">
                  <textarea
                    className="textarea bg-inherit text-stone-200  border-stone-700 textarea-xs md:textarea-md textarea-bordered w-full"
                    rows={3}
                  />
                </div>
              </div>
              <button className="bg-[#FF4800] w-fit text-white btn btn-xs md:btn-sm hover:bg-[#FF4800]/50 self-center border-[#FF4800] ">
                Contact Us
              </button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomePage;
