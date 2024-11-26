import { ICompany } from "../redux/companies";
import { formatDate } from "../utils";
import {
  CardContentContainer,
  CompanyCardContainer,
  CompanyControlsContainer,
  CompanyDate,
  CompanyDescription,
  CompanyTitle,
} from "./styled";
import { Image } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const CompanyCard = ({ name, description, foundingDate, imageUrl }: ICompany) => {
  const sanitizeName = (name: string) => {
    return name.split("/uuid")[0];
  };

  return (
    <CompanyCardContainer>
      <Image width='100%' preview={false} src={imageUrl}></Image>
      <CardContentContainer>
        <CompanyTitle>{sanitizeName(name)}</CompanyTitle>
        {foundingDate && <CompanyDate>{formatDate(foundingDate)}</CompanyDate>}
        <CompanyDescription>{description}</CompanyDescription>
      </CardContentContainer>
      <CompanyControlsContainer>
        <EditOutlined />
        <DeleteOutlined />
      </CompanyControlsContainer>
    </CompanyCardContainer>
  );
};

export default CompanyCard;
