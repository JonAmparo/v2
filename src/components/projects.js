import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Data } from 'data';
import { IconCode, IconEye } from 'components/icons';
import { theme, mixins } from 'styles';
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  :hover {
    background-color: hsla(0, 0%, 100%, 0.05);
  }
`;

const TitleH3 = styled.h3`
  font-size: ${fontSizes.display4};
  margin-top: 30px;
`;

const Text = styled.p`
  color: ${colors.gray};
  font-display: swap;
`;

const ButtonContainer = styled.div`
  ${mixins.flexBetween};
  width: 100%;
`;

const StyledButton = styled.button`
  ${mixins.Button};
  margin-top: 10px;
  display: inline-block;
  width: 49%;
  padding: 0.25rem 0.75rem;

  svg {
    height: 20px;
    width: 20px;
    margin-bottom: 5px;
    margin-right: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 25px;
`;

const Projects = () => (
  <Fragment>
    {Data.map((Data, index) => (
      <Project key={index + Data.name + Data.code} Data={Data} />
    ))}
  </Fragment>
);

const Project = ({ Data }) => {
  const { name, summary, img, demo, code, technologies } = Data;

  return (
    <StyledContainer>
      <TitleH3>{name}</TitleH3>
      <Text>{summary}</Text>
      <ButtonContainer>
        {demo === 'private' ? (
          <StyledButton href='#' disabled>
            <IconEye />
            Private
          </StyledButton>
        ) : (
          <StyledButton href={demo} target='_blank' rel='noopener noreferrer'>
            <IconEye />
            Demo
          </StyledButton>
        )}

        {code === 'private' ? (
          <StyledButton href='#' disabled>
            <IconCode />
            Private
          </StyledButton>
        ) : (
          <StyledButton href={code} target='_blank' rel='noopener noreferrer'>
            <IconCode />
            Code
          </StyledButton>
        )}
      </ButtonContainer>

      <a href={demo} target='_blank' rel='noopener noreferrer'>
        <Image srcSet={img} />
      </a>
    </StyledContainer>
  );
};

Project.propTypes = {};

export default Projects;
