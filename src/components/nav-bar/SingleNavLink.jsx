import styled from "styled-components";

const StyledLi = styled.li`
  & .link {
    font-size: 1.3rem;
    padding: 0.3rem;
    transition: ease 0.3s;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--accent-1);

    display: flex;
  }

  & .link:hover {
    padding-left: 0.7rem;
    color: var(--accent-2);
    background: var(--secondary);
  }

  @media screen and (min-width: 992px) {
    padding: 0.3rem;

    & .link {
      padding: 0;
    }

    & .link:hover {
      padding-left: 0;
      background: transparent;
      scale: 1.1;
    }
  }
`;

const SingleNavLink = ({ id, text, url }) => {
  return (
    <StyledLi>
      <a href={url} className="link">
        {text}
      </a>
    </StyledLi>
  );
};
export default SingleNavLink;
