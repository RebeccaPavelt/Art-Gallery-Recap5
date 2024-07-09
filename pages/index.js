import useSWR from "swr";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <ArtPieces />
    </div>
  );
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art";

function ArtPieces({ pieces }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data.map((piece) => (
        <li key={piece.slug}>
          <Image
            src={piece.imageSource}
            alt={piece.genre}
            width={250}
            height={250}
          />
          <h3>{piece.name}</h3>
          <p>{piece.artist}</p>
        </li>
      ))}
    </div>
  );
}
