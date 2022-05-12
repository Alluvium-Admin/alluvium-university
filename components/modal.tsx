// import { NextPage, NextComponentType } from "next";
import Modal from "react-bootstrap/Modal";
import { ICurriculumModal } from "./courses/curriculum";
import { Dispatch, SetStateAction, useState, FunctionComponent, useEffect } from "react";

interface IProps extends ICurriculumModal {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const CurriculumModal: FunctionComponent<IProps> = (props: IProps) => {
  const { header, body, footer, showModal, setShowModal } = props;

  const onHideClicked = () => {
    setShowModal(false);
  };

  // useEffect(()=>{
  //   alert(showModal);
  // }, [showModal])

  return (
    <>
      {/* {header && ( */}
      {
        showModal &&
        <div className="w-100 position-fixed p-5" style={{ backgroundColor: '#0000008', zIndex: '30', minHeight: '100vh', top: '0px', bottom: '0px', overflow: 'scroll' }}>
            {/* <div className="position-fixed"> */}
          <div className="relative d-flex align-items-center justify-content-center">
              <div className="w-75 bg-white rounded p-5 position-relative">
                <button className="btn btn-outline-secondary text-xl position-absolute" onClick={onHideClicked} style={{ top: '10px', right: '10px', fontWeight: 'bolder' }}>x</button>
                {body}
              </div>
            </div>
          </div>
        // </div>
      }
      {/* <Modal show={showModal} onHide={onHideClicked}>
        <div className="bg-secondary">

          <Modal.Header closeButton className="border-0 ps-0 pb-0">{header}</Modal.Header>
          <Modal.Body className="pt-0" style={{ width: '100%', backgroundColor: 'red' }}>{body}</Modal.Body>
        </div>
      </Modal> */}
      {/* <Modal.Footer>{footer}</Modal.Footer> */}
      {/* )} */}
    </>
  );
};
