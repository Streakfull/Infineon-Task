import styled from "styled-components";

const SideBarContainer = styled("div")`
  width: 300px;
  min-height: 100vh;
  background: ${props => props.theme.colors.navyBlue};
  padding-top: 16px;
  padding-left: 8px;
  padding-right: 8px;
  color: ${props => props.theme.colors.white};
  h3 {
    margin: 0;
  }
`;

const HomePageContainer = styled("div")`
  display: flex;
`;

const Logo = styled("img")`
  width: 100px;
`;

const LogoHeaderContainer = styled("div")`
  display: flex;
  gap: 16px;
  align-items: center;

  padding-bottom: 16px;
`;

const ControlsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64px;
`;

const ControlContainer = styled("div")`
  padding-bottom: 64px;

  h3 {
    border-bottom: 1px solid ${props => props.theme.colors.white};
    margin-bottom: 24px;
    padding-bottom: 8px;
    padding-right: 16px;
    display: inline-block;
  }
`;

const Option = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CheckBoxContainer = styled("div")`
  display: flex;
  span {
    color: ${props => props.theme.colors.white};
  }
`;
export {
  SideBarContainer,
  HomePageContainer,
  Logo,
  LogoHeaderContainer,
  ControlsContainer,
  ControlContainer,
  Option,
  CheckBoxContainer,
};
