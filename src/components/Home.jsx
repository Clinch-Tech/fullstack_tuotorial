import { useEffect, useState } from "react";
import { getMovies } from "../service/movieDB";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [movies, setMovies] = useState(getMovies());
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovies, setSelectedMOvies] = useState(movies);

  const [viewableMovies, setViewableMovies] = useState(selectedMovies);

  const pageItems = 5;

  useEffect(() => {
    let startIndex = (page - 1) * pageItems;

    setSelectedMOvies(
      movies.filter((movie) =>
        movie.title.toLocaleLowerCase().includes(searchTerm)
      )
    );

    setViewableMovies(selectedMovies.slice(startIndex, startIndex + pageItems));
  }, [searchTerm, page]);

  console.log(viewableMovies);

  return (
    <div className="">
      <div>
        <input
          type="text"
          className="w-full m-4 py-3 px-4 border border-gray-700 rounded-md outline-none"
          placeholder="Enter your search term here"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <table className="table-auto w-full m-3 ">
        <thead>
          <tr className="text-left">
            <th>S.N.</th>
            <th>Title</th>
            <th>Genre</th>
            <th>In stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {viewableMovies.map((movie, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td className="flex items-center gap-3">
                  <button className="bg-blue-500 rounded-md text-white px-4 py-2 font-medium">
                    View
                  </button>
                  {<TrashIcon className="text-red-500 h-5" />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center gap-3">
        {Array.from(
          Array(Math.ceil(selectedMovies.length / pageItems)).keys()
        ).map((item) => [
          <div
            key={item}
            className={` rounded-full py-2 px-3 ${
              page - 1 === item ? "bg-red-300" : "bg-red-199"
            } `}
            onClick={() => setPage(item + 1)}
          >
            {" "}
            {item + 1}{" "}
          </div>,
        ])}
      </div>
    </div>
  );
}
