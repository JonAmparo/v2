import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from 'components';
import { theme, mixins } from 'styles';
import jonamparo from '../images/jonamparo.jpg';
import FontFaces from 'styles/fonts';
const { colors, fontSizes } = theme;

const StyledContainer = styled.main``;

const Margintop = styled.div`
  // margin-top: 10vh;
  margin: 4vmin 8vmin;
`;

const Centered = styled.div`
  // ${mixins.flexCenter}
  // margin: 4vmin 8vmin;
`;

const SectionAboutMe = styled.section`
  padding: 6vmin 8vmin 8vmin;
  height: auto;

  h2 {
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  padding: 6vmin 6vmin 14vmin !important;
  width: calc(90vw - 8vmin);
  background: rgba(0, 0, 0, 0.4);
  border-left: 1px solid ${colors.red};
  line-height: 1.75;

  img {
    border-radius: 50% 50%;
    -webkit-box-shadow: 0 0 0 1px #000;
    box-shadow: 0 0 0 1px #000;
    float: left;
    margin: 10px 30px 30px 10px;
    opacity: 0.7;
    width: 100px;
    height: 100px;
  }

  p {
    color: #b5b3b3;
    font-size: ${fontSizes.lg}
    font-display: swap;
  }
`;

const Home = () => {
  return (
    <StyledContainer>
      <Margintop>
        <Centered>
          <h1>Hey, It's Jonathan Amparo</h1>
        </Centered>
        <Centered>
          <p>I'm a web developer located in Burtonsville, Maryland.</p>
        </Centered>
      </Margintop>

      <SectionAboutMe>
        <h2>About me</h2>
        <Card>
          <img alt='' srcSet={jonamparo} />
          <p>
            Having graduated from a one year and four months long coding boot
            camp located in the heart of Montreal, Quebec. I quickly found
            employment with the knowledge and skills I learned as a Front-End
            Web Developer. Now that I'm back home in the US, I'm searching for
            employment as a Front-End, Back-End, or a Full-Stack Developer. I'm
            currently located in Burtonsville, Maryland and plan to stick around
            the area. My favorite technologies to work with are Javascript,
            React, SCSS, CSS, HTML, JQuery, Bootstrap, MySQL, and Redux. I'm
            also familiar with Nodejs, MongoDB, Redux, PHP, Java, and VB .NET.
            I'm making strides every day to become a better developer, problem
            solver, learner and mentor. I'm a positive person, a clear
            communicator, a good teammate, a hard worker (work hard, play hard),
            and ready to build web technology and/or software with values that I
            can get behind.
          </p>
          <SocialLinks float='right' />
        </Card>
      </SectionAboutMe>
    </StyledContainer>
  );
};

export default Home;
