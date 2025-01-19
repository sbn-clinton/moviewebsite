import { SearchIcon } from "lucide-react";
import Form from "next/form";

const SearchForm = ({ name, type }: { name?: string; type?: string }) => {
  return (
    <Form
      action={"/"}
      className="flex flex-col items-center gap-2 md:gap-4 md:pt-10"
    >
      <div className="flex items-center justify-between gap-2 border-stone-700 bg-inherit input input-xs md:input-sm ">
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Search"
          className="w-full  border-none bg-transparent  text-sm text-stone-200 outline-none   focus:ring-offset-0 sm:text-base"
        />

        <button type="submit" className=" ">
          <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xs md:text-sm text-stone-200 font-black italic underline">
          In:
        </p>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="movies"
            name="type"
            value={"movie"}
            defaultChecked={type === "movie"}
            className=""
          />
          <span className="text-xs md:text-sm text-stone-200 font-extralight">
            Movies
          </span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="tvseries"
            name="type"
            value={"tvSeries"}
            defaultChecked={type === "tvSeries"}
            className=""
          />
          <span className="text-xs md:text-sm text-stone-200 font-extralight">
            TvSeries
          </span>
        </div>
      </div>
      <hr className="border-stone-400 w-[80%] mx-auto" />
    </Form>
  );
};

export default SearchForm;
