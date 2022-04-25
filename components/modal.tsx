// import { NextPage, NextComponentType } from "next";
import Modal from "react-bootstrap/Modal";
import { ICurriculumModal } from "./courses/curriculum";
import { Dispatch, SetStateAction, useState, FunctionComponent } from "react";

interface IProps extends ICurriculumModal {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const CurriculumModal: FunctionComponent<IProps> = (props: IProps) => {
  const { header, body, footer, showModal, setShowModal } = props;
  const onHideClicked = () => {
    setShowModal(false);
  };
  return (
    <>
      {header && (
        <Modal show={showModal} onHide={onHideClicked}>
          <Modal.Header closeButton className="border-0 ps-0 pb-0">{header}</Modal.Header>
          <Modal.Body className="pt-0">{body}</Modal.Body>
          {/* <Modal.Footer>{footer}</Modal.Footer> */}
        </Modal>
      )}
    </>
  );
};
