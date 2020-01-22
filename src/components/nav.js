import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks, name } from 'config';
import { IconJonLogo } from 'components/icons';
import { theme, mixins } from 'styles';
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
