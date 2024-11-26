import { useState } from "react";
import { Input, Space, Button, Spin } from "antd";
import {
  CompanyListContainer,
  ContentContainer,
  HeaderContainer,
  PaginationContainer,
  SpinnerContainer,
} from "./styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selector, actions } from "../redux/companies";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import CompanyCard from "./CompanyCard";
import { Pagination } from "antd";

const CompanyList = () => {
  const { companies, meta, loadingFetch } = useSelector(selector);

  const dispatch = useAppDispatch();

  const onChangePagination = (page: number) => {
    window.scrollTo(0, 0);
    dispatch(actions.fetchRequest({ page }));
  };

  useEffect(() => {
    dispatch(actions.fetchRequest({ page: 1 }));
  }, []);

  const renderCompanies = () => {
    return companies.map(company => <CompanyCard key={company._id} {...company} />);
  };
  return (
    <CompanyListContainer>
      <HeaderContainer>
        <Space.Compact style={{ width: "100%" }}>
          <Input placeholder='Search relevant terms...' />
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
        <ContentContainer>{renderCompanies()}</ContentContainer>
      )}

      {meta && (
        <PaginationContainer>
          <Pagination
            simple
            showSizeChanger={false}
            defaultCurrent={1}
            current={meta.current_page}
            total={meta.total_entries}
            onChange={onChangePagination}
          />
        </PaginationContainer>
      )}
    </CompanyListContainer>
  );
};

export default CompanyList;
