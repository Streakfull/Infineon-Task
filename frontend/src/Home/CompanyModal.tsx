import React, { useEffect, useState } from "react";
import { ICompany, selector } from "../redux/companies";
import { Input, Modal, Typography, DatePicker } from "antd";
import { FeedbackMessage, ModalBody } from "./styled";
import dayjs from "dayjs";
import { ILooseObject } from "../types";
import { useSelector } from "react-redux";

interface ICompanyModal {
  onSubmit: (company: Partial<ICompany>, id?: string) => void;
  cancel: () => void;
  loading?: boolean;
  isOpen?: boolean;
  isEdit?: boolean;
  company?: ICompany;
}

const CompanyModal = ({
  onSubmit,
  loading,
  isOpen,
  cancel,
  isEdit,
  company,
}: ICompanyModal) => {
  const title = isEdit ? "Edit" : "Create";
  const [name, setName] = useState("");
  const [foundingDate, setFoundingDate] = useState<ILooseObject | string>({});
  const [description, setDescription] = useState("");
  const { feedback } = useSelector(selector);

  useEffect(() => {
    if (isEdit) return;
    setName("");
    setFoundingDate("");
    setDescription("");
  }, [isOpen]);

  const sanitizeName = (name: string) => {
    return name.split("/uuid")[0];
  };
  useEffect(() => {
    if (!isEdit || !company) return;
    const { name, foundingDate, description } = company;
    setName(sanitizeName(name));
    setFoundingDate(dayjs(foundingDate));
    setDescription(description);
  }, [company]);

  const changeName = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const changeDescription = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const changeDate = (dateObject: any) => {
    setFoundingDate(dateObject);
  };

  const submit = () => {
    const date =
      typeof foundingDate === "object" ? foundingDate?.toISOString() : undefined;
    onSubmit(
      {
        name,
        foundingDate: date,
        description,
      },
      company?._id
    );
  };

  const buttonDisabled = !name || !description;

  return (
    <Modal
      okButtonProps={{ loading, disabled: buttonDisabled }}
      okText={title}
      title={`${title} Company`}
      onCancel={cancel}
      open={isOpen}
      onOk={submit}
    >
      {feedback && (
        <FeedbackMessage isError={!feedback.isSuccess}>
          {feedback.message}{" "}
        </FeedbackMessage>
      )}
      <ModalBody>
        <div>
          <Typography.Title level={5}>
            Name <span className='req'>*</span>
          </Typography.Title>
          <Input required onChange={changeName} value={name} />
        </div>

        <div>
          <Typography.Title level={5}>Founding Date</Typography.Title>
          <DatePicker value={foundingDate} onChange={changeDate} />
        </div>

        <div>
          <Typography.Title level={5}>
            Description <span className='req'>*</span>
          </Typography.Title>
          <Input.TextArea
            required
            onChange={changeDescription}
            value={description}
            rows={5}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CompanyModal;
