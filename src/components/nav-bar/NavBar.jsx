import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinksArray, socialLinksArray } from "../../data";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import { useRef, useState } from "react";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: var(--primary);
  box-shadow: var(--light-shadow);

  & .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }

  & .brand {
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);

    span {
      color: var(--accent-2);
    }
  }

  & .links-container {
    overflow: hidden;
    height: ${({ $showLinks, $linksHeight }) =>
      $showLinks ? `${$linksHeight}px` : "0"};
    transition: ease 0.3s;
  }

  & .hamburger-btn {
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .hamburger-icon {
    font-size: 2.6rem;
    color: var(--accent-1);
    transition: ease 0.3s;
  }

  & .hamburger-icon:hover {
    color: var(--accent-2);
    transform: rotate(90deg);
  }

  @media screen and (min-width: 992px) {
    & .center-div {
      max-width: 992px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    & .links-container {
      display: flex;
      align-items: center;
      height: auto;
      /* gap: 2rem; */
    }

    & .hamburger-btn {
      display: none;
    }
  }
`;

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);
  const linksRef = useRef(null);

  const handleShowLinks = () => {
    setLinksHeight(linksRef.current.getBoundingClientRect().height);
    setShowLinks(!showLinks);
  };

  return (
    <StyledNav $showLinks={showLinks} $linksHeight={linksHeight}>
      <div className="center-div">
        <div className="nav-header">
          <h3 className="brand">
            coding <span>addict</span>
          </h3>

          <button type="button" className="hamburger-btn">
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={handleShowLinks}
            />
          </button>
        </div>

        <div className="links-container">
          <NavLinks navLinks={navLinksArray} ref={linksRef} />
        </div>

        <SocialLinks socialLinks={socialLinksArray} />
      </div>
    </StyledNav>
  );
};
export default NavBar;
