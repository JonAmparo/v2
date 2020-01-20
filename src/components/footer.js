import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navLinks, name, socialMedia } from 'config';
import { FormattedIcon, IconJonLogo } from 'components/icons';
import { theme, media, mixins } from 'styles';
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

const FooterName = styled.div`
  font-size: ${fontSizes.lg};
  color: ${colors.gray};
  margin: 0 auto 30px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0 auto 30px;
  list-style: none;
`;

const StyledLink = styled.a`
  ${mixins.link};
  padding: 10px;
  margin: 0 5px;
  &:hover,
  &:focus {
    transform: translateY(-6px);
  }
  svg {
    width: 24px;
    height: 24px;
  }
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
        All materials &copy; {name} {new Date().getFullYear()}
      </FooterName>

      <StyledList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <StyledLink
                href={url}
                target='_blank'
                rel='nofollow noopener noreferrer'
                aria-label={name}
              >
                <FormattedIcon name={name} />
              </StyledLink>
            </li>
          ))}
      </StyledList>
    </StyledContainer>
  );
};

export default Footer;
