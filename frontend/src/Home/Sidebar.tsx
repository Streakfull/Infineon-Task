import {
  ControlsContainer,
  Logo,
  LogoHeaderContainer,
  SideBarContainer,
  ControlContainer,
  Option,
  CheckBoxContainer,
} from "./styled";
import { Button, Radio } from "antd";

const Sidebar = () => {
  const renderSortOptions = () => {
    const options = [
      { name: "Name", value: "name" },
      { name: "Founding Date", value: "foundingDate" },
    ];

    return options.map(option => (
      <Option>
        <span>{option.name}</span>
        <CheckBoxContainer>
          <Radio>ASC</Radio>
          <Radio>DESC</Radio>
        </CheckBoxContainer>
      </Option>
    ));
  };

  return (
    <SideBarContainer>
      <LogoHeaderContainer>
        <Logo src='/logo-desktop-light.png' />
        <h3>Investment Search</h3>
      </LogoHeaderContainer>

      <ControlsContainer>
        <ControlContainer>
          <h3>Sort</h3>
          {renderSortOptions()}
        </ControlContainer>
      </ControlsContainer>
      <Button variant='outlined' block>
        Apply
      </Button>
    </SideBarContainer>
  );
};

export default Sidebar;
