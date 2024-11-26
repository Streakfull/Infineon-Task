import { useState } from "react";
import {
  ControlsContainer,
  Logo,
  LogoHeaderContainer,
  SideBarContainer,
  ControlContainer,
  Option,
  CheckBoxContainer,
} from "./styled";
import { Button, Radio, RadioChangeEvent } from "antd";
import { useDispatch } from "react-redux";
import { actions } from "../redux/companies";
import { ILooseObject } from "../types";

type TSortState = boolean | "asc" | "desc";

const Sidebar = () => {
  const [nameSort, setNameSort] = useState<TSortState>(false);
  const [dateSort, setDateSort] = useState<TSortState>(false);
  const dispatch = useDispatch();

  const onApply = () => {
    const sortPayload: ILooseObject = {};
    const disabled = !nameSort && !dateSort;
    if (disabled) return;
    if (nameSort) sortPayload.name = nameSort === "asc" ? 1 : -1;
    if (dateSort) sortPayload.foundingDate = dateSort === "asc" ? 1 : -1;
    const sortFilters = JSON.stringify(sortPayload);
    window.scrollTo(0, 0);
    dispatch(actions.setSortFilters({ sortFilters }));
    dispatch(
      actions.fetchRequest({
        sort: sortFilters,
        page: 1,
      })
    );
  };
  const renderSortOptions = () => {
    const options = [
      {
        name: "Name",
        value: "name",
        ascChecked: nameSort === "asc",
        descChecked: nameSort === "desc",
        onChange: (e: RadioChangeEvent) => {
          setNameSort(e.target.value as TSortState);
        },
      },
      {
        name: "Date",
        value: "foundingDate",
        ascChecked: dateSort === "asc",
        descChecked: dateSort === "desc",
        onChange: (e: RadioChangeEvent) => {
          setDateSort(e.target.value as TSortState);
        },
      },
    ];

    return options.map(option => (
      <Option key={option.name}>
        <span>{option.name}</span>
        <CheckBoxContainer>
          <Radio onChange={option.onChange} value='asc' checked={option.ascChecked}>
            ASC
          </Radio>
          <Radio onChange={option.onChange} value='desc' checked={option.descChecked}>
            DESC
          </Radio>
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
      <Button onClick={onApply} color='primary' variant='solid' block>
        Apply
      </Button>
    </SideBarContainer>
  );
};

export default Sidebar;
