import { ICompany } from "../redux/companies";
import { formatDate } from "../utils";
import {
  CardContentContainer,
  CardSpinner,
  CardWrapper,
  CompanyCardContainer,
  CompanyControlsContainer,
  CompanyDate,
  CompanyDescription,
  CompanyTitle,
  ScoreTag,
} from "./styled";
import { Image, Spin } from "antd";
import { EditOutlined, DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../redux/store";
import { actions } from "../redux/companies";
import Highlighter from "react-highlight-words";

interface ICompanyCard extends ICompany {
  loading?: boolean;
  edit: (id: string) => void;
  query?: string;
}

const CompanyCard = ({
  name,
  description,
  foundingDate,
  imageUrl,
  loading,
  _id,
  edit,
  score,
  query,
}: ICompanyCard) => {
  const dispatch = useAppDispatch();
  const sanitizeName = (name: string) => {
    return name.split("/uuid")[0];
  };

  const deleteCompany = () => {
    dispatch(actions.deleteRequest({ id: _id }));
  };

  return (
    <CardWrapper>
      {loading && (
        <CardSpinner>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </CardSpinner>
      )}
      {score && <ScoreTag color='cyan'>{score}</ScoreTag>}
      <CompanyCardContainer loading={loading}>
        <Image width='100%' preview={false} src={imageUrl}></Image>
        <CardContentContainer>
          <CompanyTitle>{sanitizeName(name)}</CompanyTitle>
          {foundingDate && <CompanyDate>{formatDate(foundingDate)}</CompanyDate>}
          <CompanyDescription>
            {" "}
            <Highlighter
              highlightClassName='highlight'
              searchWords={query?.split(" ") || []}
              autoEscape={true}
              textToHighlight={description}
            />
          </CompanyDescription>
        </CardContentContainer>
        <CompanyControlsContainer>
          <EditOutlined onClick={() => edit(_id)} />
          <DeleteOutlined onClick={deleteCompany} />
        </CompanyControlsContainer>
      </CompanyCardContainer>
    </CardWrapper>
  );
};

export default CompanyCard;
