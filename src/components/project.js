import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { username } from 'config';
import { Projects, Social } from 'components';
import { IconStar } from 'components/icons';
import { theme } from 'styles';
const { colors, fontSizes } = theme;

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
  word-wrap: break-word;
`;

const SectionProject = styled.section`
  grid-column: 2/3;
  margin: 0px;
`;

const Title = styled.h2`
  font-size: ${fontSizes.display1};
`;

const SectionGithub = styled.section`
  grid-column: 3;
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
  font-size: 25px;
`;

const Atag = styled.a`
  color: #dcdbdb;
  font-weight: 400;
`;

const Project = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(json => {
        setRepos(
          json.map(repos => {
            return repos;
          })
        );
      })
      .catch(e => console.error(e));
  }, []);

  // todo: sort by desc date pushed
  // repos.map(repo => {
  //   console.log(repo.pushed_at);
  // });

  return (
    <StyledContainer>
      <SectionText>
        <SideTitle>Projects</SideTitle>
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
        {repos.map((repo, index) => (
          <Table key={index}>
            <Tbody>
              <Tr>
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
            </Tbody>
          </Table>
        ))}
      </SectionGithub>
      <Social />
    </StyledContainer>
  );
};
export default Project;
