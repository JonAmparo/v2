import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SocialLinks } from 'components';

import { navLinks, name } from 'config';
import { IconJonLogo } from 'components/icons';
import { theme, mixins } from 'styles';
const { fonts, colors, fontSizes } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexBetween};
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  text-align: center;
  color: ${colors.lightSlateGray};
  padding: 30px 8vmin 25px;
  display: block;
  position: relative;
  background-color: ${colors.black};
`;

const FooterLogo = styled.a`
  svg {
    height: 55px;
    width: 55px;
    margin-bottom: 30px;
  }
`;

const FooterList = styled.ul`
  padding: 0;
  list-style: none;
  flex-direction: row;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 auto 30px;
`;
const FooterListItem = styled.li`
  margin: 0 auto 0;
  display: inline-block;
  font-size: ${fontSizes.lg};
  padding: 3px 10px 7px;
`;
const FooterLink = styled(Link)`
  ${mixins.link};
  font-family: ${fonts.GothamXNarrow};
  color: ${colors.gray};
`;

const FooterHr = styled.hr`
  opacity: 0.1;
  margin: 0 auto 30px;
`;

const FooterName = styled.p`
  font-size: ${fontSizes.lg};
  color: ${colors.gray};
  margin: 0 auto 30px;
`;

const Footer = () => {
  return (
    <StyledContainer>
      <FooterLogo>
        <IconJonLogo />
      </FooterLogo>

      <FooterList>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <FooterListItem key={i}>
              <FooterLink to={url}>{name}</FooterLink>
            </FooterListItem>
          ))}
      </FooterList>

      <FooterHr />
      <FooterName>
        {name} {new Date().getFullYear()} <br />
      </FooterName>
      <SocialLinks float='center' />

      <FooterName>
        Inspired by{' '}
        <a
          href='https://github.com/sdras'
          target='_blank'
          rel='noopener noreferrer'
        >
          Sarah Drasner
        </a>
      </FooterName>
    </StyledContainer>
  );
};

export default Footer;
