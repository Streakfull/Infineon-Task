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

export { opacityInAnimation, PageContainer };
