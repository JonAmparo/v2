import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks, name } from 'config';
import { IconJonLogo } from 'components/icons';
import { theme, mixins, media } from 'styles';
const { fonts, colors, fontSizes } = theme;

const StyledContainer = styled.nav`
  ${mixins.flexBetween};
  display: grid;
  grid-template-areas: 'Logo NavList';
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  text-align: center;
  padding: 15px 8vmin 25px;
  text-transform: uppercase;
  font-family: ${fonts.GothamXNarrow};

  ${media.tablet`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 30px 20px 25px;
  -webkit-box-shadow: 0 2px 10px 0 #000;
  box-shadow: 0 2px 10px 0 #000;
  border: 1px solid #222;
  `};
`;

const NavLogo = styled.a`
  svg {
    height: 55px;
    width: 55px;
  }
`;

const NavName = styled.span`
  font-size: ${fontSizes.xxxl};
  display: inline-block;
  color: ${colors.white};
  font-weight: 500;
`;

const NavList = styled.ul`
  padding: 0;
  list-style: none;
  flex-direction: row;
  font-weight: 500;
  font-size: ${fontSizes.xl};
  margin: 0;
`;
const NavListItem = styled.li`
  display: inline-block;
  padding: 3px 10px 7px;
`;
const NavLink = styled(Link)`
  ${mixins.link};
  color: ${colors.gray};
  width: 100%;
`;
const Nav = () => {
  return (
    <StyledContainer>
      <NavLogo>
        <IconJonLogo />
        <NavName>{name}</NavName>
      </NavLogo>

      <NavList>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <NavListItem key={i}>
              <NavLink to={url}>{name}</NavLink>
            </NavListItem>
          ))}
      </NavList>
    </StyledContainer>
  );
};

export default Nav;
