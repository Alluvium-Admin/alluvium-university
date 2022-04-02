import { NextPage } from "next";
import Modal from "react-bootstrap/Modal";
import { ICurriculumModal } from "./courses/curriculum";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps extends ICurriculumModal {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const CurriculumModal: NextPage<IProps> = (props: IProps) => {
  const { header, body, footer, showModal, setShowModal } = props;
  const onHideClicked = () => {
    setShowModal(false);
  };
  return (
    <>
      {header && (
        <Modal show={showModal} onHide={onHideClicked}>
          <Modal.Header closeButton>{header}</Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>{footer}</Modal.Footer>
        </Modal>
      )}
    </>
  );
};
