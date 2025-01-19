import MovieCard from "@/components/MovieCard";
import SearchForm from "@/components/SearchForm";
import { Movie } from "@/lib/types";
import axios from "axios";
import { Film } from "lucide-react";
import Link from "next/link";

const Top250Movies = async () => {
  const fetchMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb236.p.rapidapi.com/imdb/top250-movies",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": process.env.RAPID_API_URL,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const movies: Movie[] = await fetchMovies();
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10 py-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className=" md:text-xl font-bold text-slate-200">
            Top 250 Movies
          </h1>
          <SearchForm />
          <Link
            href={"/contact"}
            className="bg-[#FF4800] text-white btn btn-xs md:btn-sm hover:bg-[#FF4800]/50 hidden md:flex"
          >
            Contact Us
          </Link>
        </div>
        <hr className="border-stone-700 w-full" />
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-2 text-stone-200 cursor-pointer">
              <Film className=" w-4 h-4 md:w-5 md:h-5  " />
              <span className="text-sm md:text-lg font-semibold">
                Top 250 Movies
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3  mx-auto">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top250Movies;
