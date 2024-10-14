import { getPhotos } from "../../api";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading, error } = useQuery({
    queryKey: ["photos", query],
    queryFn: () => getPhotos(query),
  });

  return (
    <div>
      <h1>검색결과 : {query}</h1>
      {isLoading && <div>로딩중...</div>}
      {error && <div>에러: {error.message}</div>}
      {/* data.results 배열을 map으로 순회하며 img 태그를 생성 */}
      {data?.results.map((photo) => (
        <img key={photo.id} src={photo.urls.regular} alt={photo.description} />
      ))}
    </div>
  );
}

export default Search;
