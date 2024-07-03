import styled from "styled-components";
import SingleNavLink from "./SingleNavLink";
import { forwardRef } from "react";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    gap: 0.7rem;
  }
`;

const NavLinks = forwardRef(({ navLinks }, ref) => {
  return (
    <StyledUl ref={ref}>
      {navLinks.map((navLink) => {
        return <SingleNavLink key={navLink.id} {...navLink} />;
      })}
    </StyledUl>
  );
});
export default NavLinks;
