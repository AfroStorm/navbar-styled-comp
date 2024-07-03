import styled from "styled-components";
import SingleSocialLink from "./SingleSocialLink";

const StyledUl = styled.ul`
  display: none;
  padding: 0.5rem;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
  }
`;

const SocialLinks = ({ socialLinks }) => {
  return (
    <StyledUl>
      {socialLinks.map((socialLink) => {
        return <SingleSocialLink key={socialLink.id} {...socialLink} />;
      })}
    </StyledUl>
  );
};
export default SocialLinks;
