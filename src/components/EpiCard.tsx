import Image from "next/image";

const EpiCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-3 px-4">
      <div className="flex items-center bg-slate-200 rounded-lg  w-fit">
        <Image
          src={"/images/epilogue.png"}
          alt="epilogue"
          width={100}
          height={100}
          className="object-fill"
        />
        <div className="flex flex-col flex-grow  w-full">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-900 font-bold">Episode Name</p>
            <p className="text-xs text-slate-900 font-light">
              <span className="font-bold">55</span> mins
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-900 font-light">
              Season:
              <span className="font-bold">1</span>
            </p>
            <p className="text-xs text-slate-900 font-light">
              Episode:
              <span className="font-bold">1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpiCard;
