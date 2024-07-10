import Image from "next/image";
import styled from "styled-components";

const PieceCard = styled.div`
  border: 3px solid black;
  padding: 30px 10px;
  margin: 50px 5px;
  text-align: center;
  background-color: whitesmoke;
`;

const PieceTitle = styled.h3`
  border: 1px solid black;
  color: #f8efba;
  background-color: black;
`;

export default function ArtPreview({ piece }) {
  return (
    <PieceCard>
      <Image
        src={piece.imageSource}
        alt={piece.slug}
        width={piece.dimensions.width / 8}
        height={piece.dimensions.height / 8}
      />
      <PieceTitle>{piece.name}</PieceTitle>
      <div>
        <i>by </i>
        <strong> {piece.artist}</strong>
      </div>
    </PieceCard>
  );
}
