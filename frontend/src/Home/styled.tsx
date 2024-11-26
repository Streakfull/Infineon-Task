import styled from "styled-components";
import { OpacityHoverAnimation, opacityInAnimation } from "../common/styled";
import { Tag } from "antd";

const SideBarContainer = styled("div")`
  position: fixed;
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
  ${props => props.theme.mediaQuery.down("sm")} {
    display: none;
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
  width: calc(100% - 320px);
  margin-left: 320px;
  padding-top: 25px;
  ${props => props.theme.mediaQuery.down("sm")} {
    width: 100%;
    margin-left: 0;
  }
`;

const HeaderContainer = styled("div")`
  width: 50%;
  margin: auto;
  display: flex;
  gap: 16px;
  ${props => props.theme.mediaQuery.down("sm")} {
    padding-left: 16px;
    padding-right: 16px;
  }
  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
    ${OpacityHoverAnimation()};
  }

  ${props => props.theme.mediaQuery.down("sm")} {
    width: 100%;
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

const CardWrapper = styled("div")`
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  transition: all 0.2s linear;
  position: relative;
  align-self: stretch;
  box-sizing: border-box;
  width: calc(25% - 30px);
  ${props => props.theme.mediaQuery.down("sm")} {
    width: 100%;
  }
  .highlight {
    background-color: yellow;
    color: black;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    border-radius: 8px 8px 0px 0px;
  }
`;

const CompanyCardContainer = styled("div")<{ loading?: boolean }>`
  opacity: ${props => (props.loading ? 0.5 : 1)};
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

const CardSpinner = styled("div")`
  position: absolute;
  z-index: 10;
  opacity: 1;
  transform: translate(-50%, -50%); /* Center the element */
  top: 50%;
  left: 50%;
  text-align: center;
`;

const ModalContent = styled("div")``;

const ModalBody = styled("div")`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .req {
    color: red;
  }
`;

const FeedbackMessage = styled("div")<{ isError?: boolean }>`
  padding: 20px;
  margin-top: 16px;
  border-radius: 8px;
  background: ${props =>
    props.isError ? props.theme.colors.errorRed : props.theme.colors.brightGreen};
  ${opacityInAnimation()};
`;

const ScoreTag = styled(Tag)`
  position: absolute;
  top: -8px;
  z-index: 100;
  left: 5px;
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
  CardSpinner,
  CardWrapper,
  ModalContent,
  ModalBody,
  FeedbackMessage,
  ScoreTag,
};
