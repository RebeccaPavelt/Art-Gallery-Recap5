import ArtPreview from "@/components/ArtPreview/ArtPreview";

export default function SpotlightPage({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h2>Inspiration of the Day</h2>
      <ArtPreview piece={randomPiece} />
    </>
  );
}
