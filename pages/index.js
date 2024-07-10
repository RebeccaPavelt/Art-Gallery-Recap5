import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces.js";
import Spotlight from "@/components/Spotlight/Spotlight";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art";

const StyledBody = styled.div`
  background-color: #f8efba;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Sorry, something went wrong :/</div>;
  if (isLoading) return <div>loading...</div>;

  const randomPiece = data[Math.floor(Math.random() * data.length)];

  return (
    <StyledBody>
      <h1>ART GALLERY</h1>
      <h2>Inspirational Art List</h2>
      <ArtPieces pieces={data} />
      <h2>Inspiration of the Day</h2>
      <Spotlight piece={randomPiece} />
    </StyledBody>
  );
}
