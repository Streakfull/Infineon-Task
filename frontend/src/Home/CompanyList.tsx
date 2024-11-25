import { useState } from "react";
import { Input, Space, Button, Spin } from "antd";
import {
  CompanyListContainer,
  ContentContainer,
  HeaderContainer,
  SpinnerContainer,
} from "./styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selector, actions } from "../redux/companies";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";

const CompanyList = () => {
  const { companies, meta, loadingFetch } = useSelector(selector);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  console.log(companies, meta, "COMPANIES");

  useEffect(() => {
    dispatch(actions.fetchRequest({ page: currentPage }));
  }, []);
  return (
    <CompanyListContainer>
      <HeaderContainer>
        <Space.Compact style={{ width: "100%" }}>
          <Input defaultValue='Search relevant terms...' />
          <Button type='primary'>Apply</Button>
        </Space.Compact>
        <Tooltip title='Create Company'>
          <PlusCircleOutlined />
        </Tooltip>
      </HeaderContainer>
      {loadingFetch ? (
        <SpinnerContainer>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </SpinnerContainer>
      ) : (
        <ContentContainer></ContentContainer>
      )}
    </CompanyListContainer>
  );
};

export default CompanyList;
