import Image from "next/image";

export default function ArtPreview({ piece }) {
  return (
    <div>
      <Image
        src={piece.imageSource}
        alt={piece.slug}
        width={250}
        height={250}
      />
      <h3>{piece.name}</h3>
      <p>{piece.artist}</p>
    </div>
  );
}
