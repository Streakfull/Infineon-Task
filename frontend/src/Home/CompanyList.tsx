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
import { selector, actions, ICompany } from "../redux/companies";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import CompanyCard from "./CompanyCard";
import { Pagination } from "antd";
import CompanyModal from "./CompanyModal";

const CompanyList = () => {
  const {
    companies,
    meta,
    loadingFetch,
    deletedIds,
    loadingDelete,
    loadingCreate,
    loadingEdit,
    sortFilters,
  } = useSelector(selector);
  const [isCreateModalOpen, setIsModalCreateOpen] = useState(false);
  const [editId, setIsEditId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useAppDispatch();

  const onChangePagination = (page: number) => {
    window.scrollTo(0, 0);
    dispatch(actions.fetchRequest({ page, ...(sortFilters && { sort: sortFilters }) }));
  };

  useEffect(() => {
    dispatch(
      actions.fetchRequest({
        page: 1,
        ...(sortFilters && { sort: sortFilters }),
      })
    );
  }, []);

  const search = () => {
    dispatch(
      actions.fetchRequest({
        showAll: !!searchQuery,
        page: 1,
        search: searchQuery,
        ...(sortFilters && { sort: sortFilters }),
      })
    );
  };

  const renderCompanies = () => {
    return companies
      .filter(company => !deletedIds.includes(company._id))
      .map(company => (
        <CompanyCard
          edit={(id: string) => setIsEditId(id)}
          loading={loadingDelete === company._id}
          key={company._id}
          query={searchQuery}
          {...company}
        />
      ));
  };

  const onSubmitModal = (company: Partial<ICompany>, id: string = "") => {
    dispatch(actions.resetFeedback());
    if (!!editId) {
      dispatch(actions.editCompanyRequest({ company, id }));
      return;
    }
    dispatch(actions.createCompanyRequest({ company }));
  };

  const closeModal = () => {
    dispatch(actions.resetFeedback());
    setIsModalCreateOpen(false);
    setIsEditId("");
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <CompanyListContainer>
      <CompanyModal
        isEdit={!!editId}
        isOpen={isCreateModalOpen || !!editId}
        onSubmit={onSubmitModal}
        cancel={closeModal}
        company={!!editId ? companies.find(company => company._id === editId) : undefined}
        loading={!!editId ? loadingEdit : loadingCreate}
      />
      <HeaderContainer>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            value={searchQuery}
            onChange={onChangeSearch}
            placeholder='Search relevant terms...'
          />
          <Button onClick={search} type='primary'>
            Apply
          </Button>
        </Space.Compact>
        <Tooltip title='Create Company'>
          <PlusCircleOutlined onClick={() => setIsModalCreateOpen(true)} />
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
