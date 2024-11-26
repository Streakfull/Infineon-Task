const colors = {
  //primaryColor: '#1890ff',
  white: "#fff",
  background: "#F5F5F5",
  navyBlue: "#252B48",
  darkGray: "#303030",
  lightGray: "#909090",
};

const breakPoints = {
  xs: 0,
  sm: 600,
  md: 900,
  xmd: 1025,
  lg: 1200,
  xl: 1536,
  $xxs: 360,
  $xs: 480,
  $sm: 576,
  $md: 768,
  $lg: 992,
  $xl: 1200,
  $xxl: 1600,
  $xxxl: 1920,
};
const down = (breakpoint: keyof typeof breakPoints) => {
  const value = breakPoints[breakpoint];
  return `@media (max-width:${value}px)`;
};
const up = (breakpoint: keyof typeof breakPoints) => {
  const value = breakPoints[breakpoint];
  return `@media (min-width:${value}px)`;
};

const theme = {
  colors,
  breakPoints,
  mediaQuery: {
    down,
    up,
  },
};

export default theme;
