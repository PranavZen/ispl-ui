import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // If using react-bootstrap

const AgreementModal = ({ show, handleClose, handleConfirm }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onConfirm = () => {
    if (isChecked) {
      handleConfirm();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="agreedModalWrap">
      <Modal.Header closeButton>
        <Modal.Title>Registration Camp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mainPara">
          To support the <b>"Street to Stadium"</b> initiative and contribute to
          grassroots cricket development, organizations or individuals must meet
          the following criteria:
        </p>
        <ul>
          <li>
            Secure a minimum of 1,500 confirmed registrations from the specific
            city.
          </li>
          <li>
            Once 1,500 confirmed registrations are received, the city will be
            included in our official trial list.
          </li>
        </ul>
        <b className="noteText">Benefits:</b>
        <p className="notePara">
          During the city trials, your name and logo will be prominently
          featured in all branding and marketing efforts within your city.
        </p>
        <Form.Check
          type="checkbox"
          label="I agree"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onConfirm} disabled={!isChecked}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgreementModal;
