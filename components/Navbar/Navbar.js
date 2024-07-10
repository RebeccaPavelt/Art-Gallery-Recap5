import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  border: 1px solid black;
  padding: 20px;
  margin: 0px;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const StyledLi = styled.li`
  text-decoration: none;
`;

const StyledLink = styled(Link)``;
export default function Navigation() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink href="/">Spotlight</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
