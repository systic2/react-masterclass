import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });
  console.log(data, isLoading);

  return <div style={{ backgroundColor: "black", height: "200vh" }}></div>;
}

export default Home;
