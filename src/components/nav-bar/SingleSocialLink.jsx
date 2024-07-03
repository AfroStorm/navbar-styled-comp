import styled from "styled-components";

const StyledLi = styled.li`
  & .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .link-icon {
    font-size: 1.4rem;
    color: var(--accent-1);
    transition: ease 0.3s;
  }

  & .link-icon:hover {
    scale: 1.2;
    color: var(--accent-2);
  }
`;

const SingleSocialLink = ({ id, url, Icon }) => {
  return (
    <StyledLi>
      <a href={url} className="link">
        <Icon className="link-icon" />
      </a>
    </StyledLi>
  );
};
export default SingleSocialLink;
