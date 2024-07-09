import ArtPreview from "../ArtPreview/ArtPreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPreview piece={piece} />
        </li>
      ))}
    </div>
  );
}
