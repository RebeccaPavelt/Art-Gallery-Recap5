import ArtPreview from "@/components/ArtPreview/ArtPreview";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <h2>Inspirational Art List</h2>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPreview piece={piece} />
        </li>
      ))}
    </>
  );
}
