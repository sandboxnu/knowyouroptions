// from https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// thx Stefan <3 very cool

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};

export const maxDevice = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktop}px)`,
};

export const colors = {
  homepageBackground: '#ef8b6f',
  homepageNavBarDropdown: '#6abdc1',
};
