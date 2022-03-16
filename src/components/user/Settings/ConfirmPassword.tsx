import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

type ConfirmPasswordProps = {
  onHide: (e?: React.MouseEvent) => void,
  show: boolean,
  passwordModal: () => void,
  onPasswordChange: (e: string) => void
};

function ConfirmPassword({
  onHide, show, passwordModal, onPasswordChange,
}: ConfirmPasswordProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(e.target.value);
  };
  return (
    <div>
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Form.Group>
            <Form.Label>Please enter your current password</Form.Label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="info" type="submit" onClick={passwordModal} className="bg-amber-700 text-white font-bold border-none py-2 px-4 rounded-sm">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmPassword;
