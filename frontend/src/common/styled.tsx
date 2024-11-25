import styled from "styled-components";

const opacityInAnimation = (time = 0.6, transitionType = "ease-in-out") => `
animation: opacityIn ${time}s ${transitionType};
@keyframes opacityIn {
  0% {
    visibility:visible;
    opacity:0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity:1;
  }
}
`;

const PageContainer = styled("div")`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  ${opacityInAnimation()};
`;

const OpacityHoverAnimation = (color: string = "#604bdf", duration: number = 0.3) => `
color:${color} ;
transition: opacity,background-color ${duration}s linear;
&:hover {
  opacity: 0.7;
}
`;

export { opacityInAnimation, PageContainer, OpacityHoverAnimation };
