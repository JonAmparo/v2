import { css } from 'styled-components';
import theme from './theme';
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
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.pink};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.red};
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.blue} !important;
        transition: ${theme.transition};
      }
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
