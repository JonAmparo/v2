import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from 'config';
import { FormattedIcon } from 'components/icons';
import { mixins } from 'styles';

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

const SocialLinks = ({ float = 'right' }) => {
  return (
    <StyledList style={{ float }}>
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
  );
};


SocialLinks.propTypes = {
  float: PropTypes.string,
};

export default SocialLinks;
