import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from 'components';
import { theme, mixins } from 'styles';
const { colors } = theme;

const StyledContainer = styled.main``;

const Margintop = styled.div`
  margin-top: 50px;
`;

const Centered = styled.div`
  ${mixins.flexCenter}
`;

const SectionAboutMe = styled.section`
  padding: 8vmin;
  height: auto;

  h2 {
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  padding: 6vmin 6vmin 10vmin !important;
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
    font-size: 18px;
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
          <p>I'm a web developer located in Washington, DC.</p>
        </Centered>
      </Margintop>

      <SectionAboutMe>
        <h2>About me</h2>
        <Card>
          <img
            alt=''
            srcSet='https://secure.gravatar.com/avatar/d3038fdf1c59b4021007b26f1ebf3893'
          />
          <p>
            Duis ut ultrices turpis, fringilla pulvinar tortor. Praesent in
            cursus lacus. Praesent vestibulum tortor ac leo viverra, quis
            pharetra lacus maximus. Praesent ut luctus massa, non maximus sem.
            Aenean eleifend justo nec condimentum lacinia. Phasellus accumsan
            risus eu magna tincidunt, non maximus justo facilisis. In ut est at
            libero placerat imperdiet nec sit amet justo. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Suspendisse ex eros, malesuada mattis scelerisque eu,
            semper id dolor. Donec nec mauris et nisi pulvinar finibus. Cras
            sapien nulla, semper in mi quis, porttitor auctor ante. Pellentesque
            bibendum nisi vitae urna ullamcorper, vel gravida lacus imperdiet.
            Nam ultrices massa libero, viverra dictum enim finibus sed. Integer
            sit amet nisi a leo elementum semper facilisis a tellus. Curabitur
            at lectus vitae tortor congue pharetra vitae vel urna. Curabitur
            malesuada porttitor efficitur.
          </p>
          <SocialLinks float='right' />
        </Card>
      </SectionAboutMe>
    </StyledContainer>
  );
};

export default Home;
