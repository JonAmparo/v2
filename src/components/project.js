import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { username } from 'config';
import { Projects } from 'components';
import { IconStar } from 'components/icons';
import { theme, media } from 'styles';
const { colors, fontSizes } = theme;

const StyledContainer = styled.main`
  display: grid;
  grid-gap: 8vmin;
  grid-template-columns: 1fr 2fr 2fr;
  margin: 8vmin;

  ${media.sm`
    grid-gap: 5vmin;
    grid-template:
        'a'
        'b'
        'c';
    margin: 4vmin;
  `}
`;

const SectionText = styled.section`
  grid-column: 1/2;
  position: fixed;
  margin: 0px;

  ${media.sm`
    grid-area: a;
    height: 150px;
    margin: 30px 0;
    position: relative;
  `}
`;

const SideTitle = styled.h1`
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  left: 80px;
  top: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  font-size: ${fontSizes.title};

  text-transform: uppercase;

  ${media.sm`
    font-size: ${fontSizes.display1};
    left: 46px;
  `};
`;

const ProjectSocial = styled.div`
  bottom: 8vmin;
  position: fixed;
  line-height: 1.4;
  width: 210px;

  ${media.sm`
    position: relative;
    bottom: auto;
    margin-left: 70px;
`}
`;

const ProjectText = styled.p`
  color: ${colors.gray};
  font-display: swap;
  word-wrap: break-word;
`;

const SectionProject = styled.section`
  grid-column: 2/3;
  margin: 0px;

  ${media.sm`
    grid-area: b;
  `}
`;

const Title = styled.h2`
  font-size: ${fontSizes.display1};
`;

const SectionGithub = styled.section`
  grid-column: 3;

  ${media.sm`
    grid-area: c;
  `}
`;

const Table = styled.table`
  border-collapse: collapse:
`;

const Tbody = styled.tbody`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
`;

const Tr = styled.tr`
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;

  :hover {
    background-color: hsla(0, 0%, 100%, 0.05);
  }
`;
const Td = styled.td`
  border-bottom: 1px solid #4b4a4a;
  padding: 0.8rem 0;
  text-align: left;

  svg {
    display: inline-block;
    height: 20px;
    align-items: center;
    width: auto;
    margin-right: 5px;
    color: ${colors.yellow};
  }
`;
const H3 = styled.h3`
  padding-bottom: 5px;
  font-size: ${fontSizes.xxl};
`;

const Atag = styled.a`
  color: #dcdbdb;
  font-weight: 400;
`;

const Project = () => {
  const [repos, setRepos] = useState([]);

  // Todo: add pushed at date
  // let arr = repos;
  // console.log('repos:', repos);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(json => {
        return setRepos(
          json.map(repos => {
            return repos;
          })
        );
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledContainer>
      <SectionText>
        <SideTitle>Portfolio</SideTitle>
        <ProjectSocial>
          <ProjectText>
            Here are some of my projects. Check them out. Feel free to hit me
            up.
          </ProjectText>
        </ProjectSocial>
      </SectionText>
      <SectionProject>
        <Title>Projects</Title>
        <Projects />
      </SectionProject>
      <SectionGithub>
        <Title>Github</Title>
        <Table>
          <Tbody>
            {repos.map((repo, index) => (
              <Tr key={index}>
                <Td>
                  <H3>
                    <Atag href={repo.html_url}>{repo.name}</Atag>
                  </H3>
                  <span>
                    <IconStar />
                    {repo.stargazers_count}
                  </span>
                  <p>{repo.description}</p>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </SectionGithub>
    </StyledContainer>
  );
};
export default Project;
