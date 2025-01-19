import MovieCard from "@/components/MovieCard";
import SearchForm from "@/components/SearchForm";
import { Movie } from "@/lib/types";
import axios from "axios";
import { Film, Tv, Videotape } from "lucide-react";
import Link from "next/link";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; type?: string }>;
}) => {
  const { name, type } = await searchParams;

  const fetchSearchMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb236.p.rapidapi.com/imdb/search",
        params: {
          originalTitle: name,
          type: type,
          page: 1,
          limit: 10,
          sortField: "averageRating",
          sortOrder: "ASC",
        },
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": process.env.RAPID_API_URL,
        },
      };

      const response = await axios.request(options);

      // Assuming the data is an array of movies
      const movies = response.data.results;

      return movies;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const searchMovies: Movie[] = await fetchSearchMovies();

  console.log(searchMovies);

  const fetchMostPopularMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb236.p.rapidapi.com/imdb/most-popular-movies",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": process.env.RAPID_API_URL,
        },
      };

      const response = await axios.request(options);

      // Assuming the data is an array of movies
      const movies = response.data;

      // Return only the first 6 movies
      return movies.slice(0, 6);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const mostPopularMovies: Movie[] = await fetchMostPopularMovies();

  console.log(mostPopularMovies);

  const fetchMostPopularTvShows = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb236.p.rapidapi.com/imdb/most-popular-tv",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": process.env.RAPID_API_URL,
        },
      };

      const response = await axios.request(options);

      // Assuming the data is an array of movies
      const movies = response.data;

      // Return only the first 6 movies
      return movies.slice(0, 6);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const mostPopularTvShows: Movie[] = await fetchMostPopularTvShows();

  const fetchTopRatedIndianMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb236.p.rapidapi.com/imdb/india/top-rated-indian-movies",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": process.env.RAPID_API_URL,
        },
      };

      const response = await axios.request(options);

      // Assuming the data is an array of movies
      const movies = response.data;

      // Return only the first 6 movies
      return movies.slice(0, 6);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const topRatedIndianMovies: Movie[] = await fetchTopRatedIndianMovies();

  console.log(name, type);

  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10 py-3 md:py-0 md:pb-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className=" md:text-xl font-bold text-slate-200">Home</h1>
          <SearchForm name={name} type={type} />
          <Link
            href={"/contact"}
            className="bg-[#FF4800] text-white btn btn-xs md:btn-sm hover:bg-[#FF4800]/50 hidden md:flex"
          >
            Contact Us
          </Link>
        </div>
        <hr className="border-stone-700 w-full" />
        {name && searchMovies ? (
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-stone-200 cursor-pointer">
                {type === "movie" ? (
                  <Film className=" w-4 h-4 md:w-5 md:h-5  " />
                ) : (
                  <Tv className=" w-4 h-4 md:w-5 md:h-5  " />
                )}
                <span className="text-sm md:text-lg font-semibold">
                  Search Results{" "}
                  <span className="text-stone-400 text-xs font-extralight italic">
                    ({name})
                  </span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3  mx-auto">
              {searchMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-200 cursor-pointer">
                  <Film className=" w-4 h-4 md:w-5 md:h-5  " />
                  <span className="text-sm md:text-lg font-semibold">
                    Movies{" "}
                    <span className="text-stone-400 text-xs font-extralight italic">
                      (Most Popular)
                    </span>
                  </span>
                </div>
                <Link
                  href={"/movies/mostpopular"}
                  className="underline underline-offset-4 text-stone-200 hover:text-blue-600 text-xs md:text-sm  flex items-center"
                >
                  <span className=" font-bold">See More</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3  gap-3  mx-auto">
                {mostPopularMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-200 cursor-pointer">
                  <Tv className=" w-4 h-4 md:w-5 md:h-5  " />
                  <span className="text-sm md:text-lg font-semibold">
                    Tv Shows{" "}
                    <span className="text-stone-400 text-xs font-extralight italic">
                      (Most Popular)
                    </span>
                  </span>
                </div>
                <Link
                  href={"/tvshows/mostpopular"}
                  className="underline underline-offset-4 text-stone-200 hover:text-blue-600 text-xs md:text-sm  flex items-center"
                >
                  <span className=" font-bold">See More</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mx-auto">
                {mostPopularTvShows.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-200 cursor-pointer">
                  <Videotape className=" w-4 h-4 md:w-5 md:h-5  " />
                  <span className="text-sm md:text-lg font-semibold">
                    Indian Movie{" "}
                    <span className="text-stone-400 text-xs font-extralight italic">
                      (Top Rated)
                    </span>
                  </span>
                </div>
                <Link
                  href={"/indianmovies/toprated"}
                  className="underline underline-offset-4 text-stone-200 hover:text-blue-600 text-xs md:text-sm  flex items-center"
                >
                  <span className=" font-bold">See More</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mx-auto">
                {topRatedIndianMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
