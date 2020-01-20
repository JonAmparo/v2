import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navLinks, name, socialMedia } from 'config';
import { FormattedIcon, IconJonLogo } from 'components/icons';
import { theme, media, mixins } from 'styles';
const { fonts, colors, fontSizes } = theme;

const StyledContainer = styled.main`
  display: grid;
  grid-gap: 8vmin;
  grid-template-columns: 1fr 2fr 2fr;
  margin: 8vmin;
`;

const SectionText = styled.section`
  grid-column: 1/2;
  position: fixed;
  margin: 0px;
`;

const SideTitle = styled.h1`
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  left: 80px;
  top: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  font-size: 7.4vmin;
  text-transform: uppercase;
`;

const ProjectSocial = styled.div`
  bottom: 8vmin;
  position: fixed;
  line-height: 1.4;
  width: 210px;
`;

const ProjectText = styled.p`
  color: ${colors.gray}
  font-display: swap;
`;

const SectionProject = styled.section`
  grid-column: 2/3;
  margin: 0px;
`;

const Title = styled.h2`
  font-size: ${fontSizes.display1};
`;

const TitleH3 = styled.h3`
  font-size: ${fontSizes.display4};
  margin-top: 30px;
`;

const Text = styled.p`
  color: ${colors.gray};
  font-display: swap;
`;

const SectionGithub = styled.section`
  grid-column: 3;
`;

const Project = props => {
  return (
    <StyledContainer>
      <SectionText>
        <SideTitle>Projects</SideTitle>
        <ProjectSocial>
          <ProjectText>
            Follow me on Github or Twitter if you want, I suppose.
          </ProjectText>
        </ProjectSocial>
      </SectionText>
      <SectionProject>
        <Title>Projects</Title>
        <TitleH3>Gravitus Gym Application</TitleH3>
        <Text>
          Inspired from the iOS application called Gravitus. I used it as a tool
          to further my learning and understanding of React.
        </Text>
        <button></button>
      </SectionProject>
      <SectionGithub>
        <Title>Github</Title>
      </SectionGithub>
    </StyledContainer>
  );
};

Project.propTypes = {};

export default Project;
