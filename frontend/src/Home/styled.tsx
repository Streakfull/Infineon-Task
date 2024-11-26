import styled from "styled-components";
import { OpacityHoverAnimation, opacityInAnimation } from "../common/styled";

const SideBarContainer = styled("div")`
  width: 320px;
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

const CompanyListContainer = styled("div")`
  width: 100%;
  padding-top: 25px;
`;

const HeaderContainer = styled("div")`
  width: 50%;
  margin: auto;
  display: flex;
  gap: 16px;
  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
    ${OpacityHoverAnimation()};
  }
`;

const ContentContainer = styled("div")`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  gap: 32px;
  margin-top: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SpinnerContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CompanyCardContainer = styled("div")`
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  transition: all 0.2s linear;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  cursor: pointer;
  width: calc(25% - 30px);
  position: relative;
  &:hover {
    transform: scale(1.1);
  }

  img {
    border-radius: 8px 8px 0px 0px;
  }
`;

const CardContentContainer = styled("div")`
  padding: 8px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CompanyTitle = styled("div")`
  font-weight: 700;
`;

const CompanyDescription = styled("div")`
  color: ${props => props.theme.colors.darkGray};
`;

const CompanyDate = styled("span")`
  color: ${props => props.theme.colors.lightGray};
`;

const CompanyControlsContainer = styled("div")`
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  bottom: 0;
  svg {
    cursor: pointer;
    width: 18px;
    height: 18px;
    ${OpacityHoverAnimation()};
  }
`;

const PaginationContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
  margin-top: 32px;
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
  CompanyListContainer,
  HeaderContainer,
  ContentContainer,
  SpinnerContainer,
  CompanyCardContainer,
  CompanyTitle,
  CardContentContainer,
  CompanyDescription,
  CompanyDate,
  CompanyControlsContainer,
  PaginationContainer,
};
