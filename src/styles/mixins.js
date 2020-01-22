import { css } from 'styled-components';
import theme from './theme';
// import media from './media';
const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  title: css`
    text-transform: uppercase;
    font-weight: 500;
    font-style: normal;
    color: ${colors.white};
  `,

  outline: css`
    outline: 1px solid red;
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.red};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.blue};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.blue};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.blue} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.blue};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  Button: css`
    color: ${colors.lightBlue};
    background-color: transparent;
    border: 1px solid ${colors.lightBlue};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smish};
    font-family: ${fonts.Calibre};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-align: center;
    &:hover,
    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.lightBlue};
    }
    &:after {
      display: none !important;
    }

    &:disabled,
    &:disabled:hover {
      background-color: transparent;

      cursor: default;
      color: ${colors.darkGray};
      border: 1px solid ${colors.darkGray};
    }
  `
};

export default mixins;
