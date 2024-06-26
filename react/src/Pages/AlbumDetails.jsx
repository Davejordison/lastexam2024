import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";

const getHits = (albumId) =>
  fetch(`/api/albums/${albumId}/hits`).then((res) => res.json());

export default function AlbumDetails() {
  const { albumId } = useParams();
  const query = useQuery({ queryKey: ["hits", albumId], queryFn: () => getHits(albumId) });

  if (query.isLoading) {
    return (
      <div className="grid grid-rows-3 gap-3 w-5/6 mx-auto">
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  if (!query.data || !query.data.hits || query.data.hits.length === 0) {
    return <div>No hits found for this album.</div>;
  }

  const sortedHits = query.data.hits.sort((a, b) => a.length - b.length);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-4">Hits for Album ID: {albumId}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Length</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Popularity</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sortedHits.map((hit) => (
              <tr key={hit.id} className="border-b border-gray-300">
                <td className="px-6 py-4">{hit.title}</td>
                <td className="px-6 py-4">{hit.length} mins</td>
                <td className="px-6 py-4">{hit.popularityIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}