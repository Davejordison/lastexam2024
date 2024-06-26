import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const getAlbums = () => fetch("/api/albums").then((res) => res.json());

export default function Albums() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openAlbum, setOpenAlbum] = useState(null);
  const query = useQuery({ queryKey: ["albums"], queryFn: getAlbums });

  if (query.isLoading) {
    return (
      <main id="albums" className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-3/4 h-2/3 bg-white shadow-md border border-gray-300 rounded-lg p-6 flex flex-col justify-center items-center">
          <p className="text-4xl text-center">Loading...</p>
        </div>
      </main>
    );
  }

  const filteredAlbums = query.data.albums.filter((album) =>
    album.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main id="albums" className="h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for an album..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="bg-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                className="bg-white shadow-md border border-gray-300 rounded-lg p-4 cursor-pointer"
                onClick={() => setOpenAlbum(openAlbum === album.id ? null : album.id)}
              >
                <h2 className="text-2xl font-bold">{album.name}</h2>
                {openAlbum === album.id && (
                  <div className="mt-2">
                    <p>Release Year: {album.releaseYear}</p>
                    <p>Popularity: {album.popularity}</p>
                    <Link
                      to={`/albums/${album.id}/hits`}
                      className="text-blue-500 underline"
                    >
                      More Info
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}