import SearchForm from "@/components/SearchForm";
import { MovieDetail } from "@/lib/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const SingleMoviePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const fetchMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://imdb236.p.rapidapi.com/imdb/${slug}`,
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

  const movies: MovieDetail = await fetchMovies();

  console.log(movies);

  if (!movies.primaryImage) {
    return null; // Skip rendering if primaryImage is not available
  }

  return (
    <div className="flex flex-col gap-5 md:gap-10 py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className=" md:text-xl font-bold text-slate-200">
          {movies.primaryTitle}
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
      <div className="flex flex-col gap-5 md:gap-10 py-3 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className=" md:text-xl font-bold text-slate-200">
            {movies.primaryTitle}{" "}
            <span className="text-xs md:text-sm text-stone-400 font-extralight">
              (in{" "}
              <Link href={"/"} className="text-blue-400 underline">
                Hollywood Movies
              </Link>
              )
            </span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            {movies.primaryTitle} {movies.startYear} - Download Movie for mobile
            in best quality 3gp and mp4 format. Also stream{" "}
            {movies.primaryTitle} on your mobile, tablets and ipads
          </p>
        </div>
        <div className="w-52 h-64 md:w-56 md:h-72 mx-auto relative rounded-lg">
          <Image
            src={movies.primaryImage}
            alt="movie"
            className="rounded-lg "
            fill
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center text-center">
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Plot: <span className="text-orange-200">{movies.description}</span>
          </p>
          {movies.runtimeMinutes && (
            <p className="text-xs md:text-sm text-slate-400 font-light">
              Runtime:{" "}
              <span className="text-green-200">
                {movies.runtimeMinutes} min
              </span>
            </p>
          )}
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Release Date:{" "}
            <span className="text-green-200">{movies.releaseDate.day}</span>/
            <span className="text-blue-400">{movies.releaseDate.month}</span>/
            <span className="text-blue-400">{movies.releaseDate.year}</span>
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Starcast:{" "}
            {movies.cast.map((cast) => (
              <span key={cast.fullName} className="text-blue-400 ml-1">
                {cast.fullName}
              </span>
            ))}
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Director(s):{" "}
            {movies.directors.map((director) => (
              <span key={director.fullName} className="text-blue-400 ml-1">
                {director.fullName}
              </span>
            ))}
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Genre:{" "}
            {movies.genres.map((genre) => (
              <span className="text-blue-400 ml-1" key={genre}>
                {genre}
              </span>
            ))}
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Tags:
            {movies.interests.map((tag) => (
              <span className="text-blue-400 ml-1" key={tag}>
                {tag}
              </span>
            ))}
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            IMDb:{" "}
            <Link href={movies.url} className="text-blue-400 cursor-pointer">
              {movies.url}
            </Link>
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Downloads: <span className="text-blue-400">{movies.numVotes}</span>
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            IMDb Rating:{" "}
            <span className="text-blue-400">{movies.averageRating}</span>
          </p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center text-center">
          <p className="text-xs md:text-sm text-slate-400 font-light">
            Trailer:
          </p>
          <div className="w-64 h-fit mx-auto border border-stone-400 p-2 relative">
            <Image
              src={movies.primaryImage}
              alt="movie"
              width={500}
              height={500}
              className="w-fit h-fit"
            />

            <button className="p-3 rounded-lg bg-stone-400 flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaPlay className="w-5 h-5 md:w-5 md:h-5 text-red-600" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center text-center">
          <div className="py-2 rounded-md w-[95%] md:w-[80%] text-center bg-stone-200">
            <p className="text-sm text-stone-900 font-light">
              Download Files
              <span className=" text-xs font-extralight">
                (click on the format to get the list of files)
              </span>
            </p>
          </div>
          <div className="py-2 rounded-md w-[95%] md:w-[80%] text-center bg-stone-200 flex flex-col gap-1 md:gap-2 items-center justify-center ">
            <p className="text-xs md:text-sm text-blue-800 font-light underline">
              {" "}
              480p and 720p{" "}
            </p>
            <div className="flex flex-col gap-1 md:gap-2 items-center justify-center w-full">
              <p className="text-xs font-bold md:text-sm text-blue-800  underline">
                {" "}
                WEBRip (HD Print)
              </p>
              <p className="text-xs  text-blue-800 font-extralight ">
                {" "}
                (Uploaded on: 01 Jan 2025)
              </p>
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <Link
                  href={movies.url}
                  className="flex flex-col gap-2 items-center justify-center text-center bg-stone-600 rounded-lg w-[85%] mx-auto p-2 cursor-pointer"
                >
                  <p className=" text-stone-100 font-extralight">
                    [ Standard Quality]
                  </p>
                  <hr className="border-stone-700 w-[50%] mx-auto" />
                  <div className="flex-col flex items-center justify-center text-center">
                    <p className="text-sm text-stone-100 font-extralight">
                      {movies.originalTitle} {movies.year} WEBRip 480p.mp4
                    </p>
                    <p className="text-xs text-stone-100 font-extralight">
                      (284 MB) {"75148 hits"} -{" "}
                      <span className="text-blue-400">mediaInfo</span>
                    </p>
                  </div>
                </Link>
                <Link
                  href={movies.url}
                  className="flex flex-col gap-2 items-center justify-center text-center bg-stone-600 rounded-lg w-[85%] mx-auto p-2 cursor-pointer"
                >
                  <p className=" text-stone-100 font-extralight">
                    [ HD Quality]
                  </p>
                  <hr className="border-stone-700 w-[50%] mx-auto" />
                  <div className="flex-col flex items-center justify-center text-center">
                    <p className="text-sm text-stone-100 font-extralight">
                      {movies.originalTitle} {movies.year} WEBRip 720p.mp4
                    </p>
                    <p className="text-xs text-stone-100 font-extralight">
                      (677 MB) {"31148 hits"} -{" "}
                      <span className="text-blue-400">mediaInfo</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {movies.totalSeasons && movies.totalEpisodes && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-3 px-4">
          {movies.episodes.map((episode) => (
            <div
              key={episode.id}
              className="flex items-center bg-inherit rounded-lg  w-full gap-2"
            >
              <Image
                src={movies.primaryImage!}
                alt="epilogue"
                width={50}
                height={50}
                className="object-fill rounded-l-lg"
              />
              <div className="flex flex-col gap-1 flex-grow  w-full">
                <p className="text-sm text-slate-200 font-bold text-wrap">
                  {episode.originalTitle}
                </p>
                <p className="text-xs text-slate-200 font-light">
                  <span className="font-bold">{episode.runtimeMinutes}</span>{" "}
                  mins
                </p>

                <p className="text-xs text-slate-200 font-light">
                  Season:
                  <span className="font-bold">{episode.seasonNumber}</span>
                </p>
                <p className="text-xs text-slate-200 font-light">
                  Episode:
                  <span className="font-bold">{episode.episodeNumber}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleMoviePage;
