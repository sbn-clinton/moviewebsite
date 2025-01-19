import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Movie } from "@/lib/types";

const MovieCard = ({ movie }: { movie: Movie }) => {
  // if (!movie.primaryImage) {
  //   return null; // Skip rendering if primaryImage is not available
  // }

  return (
    <Link href={`/detail/${movie.id}`}>
      <Card className="flex flex-col gap-2 p-2 bg-inherit border-stone-700 w-fit h-fit">
        {movie.primaryImage ? (
          <Image
            src={movie.primaryImage}
            alt="movie"
            width={300}
            height={200}
            className="rounded-lg object-fill w-[300px] h-[200px]"
          />
        ) : (
          <div className="w-[300px] h-[200px] rounded-lg bg-slate-200 flex items-center justify-center">
            <div className="text-stone-400 text-xs font-extralight italic">
              No Image Available
            </div>
          </div>
        )}

        <p className="text-xs md:text-sm text-stone-200 font-light py-1">
          {movie.title || movie.originalTitle}
        </p>
      </Card>
    </Link>
  );
};

export default MovieCard;
