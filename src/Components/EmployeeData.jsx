import React, { useState } from 'react';
import {Col, Modal, Button} from "react-bootstrap";
import EditEmployeeDataForm from './EditEmployeeDataForm'

const EmployeeData = ({dataList, deleteData, editData}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
      deleteData(dataList.id);
  }

    return (
        <>
        <Col md="4">
        <div>
            <p>First Name: <strong>{dataList.firstName}</strong> </p>
            <p>Last Name: <strong>{dataList.lastName}</strong> </p>
            <p>Email: <strong>{dataList.email}</strong> </p>
            <p>Phone Number: <strong>{dataList.phoneNumber}</strong> </p>
            <p>Home Address: <strong>{dataList.homeAddress}</strong> </p>
            <p>Job Role: <strong>{dataList.jobRole}</strong> </p>
            <p>Current Salary: <strong>{dataList.currentSalary}</strong> </p>

            <Button variant="success" className="edit" onClick={handleShow} >Edit</Button>
            <Button variant="danger" className="delete" onClick={handleDelete} >Delete</Button>
        </div>
        </Col>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditEmployeeDataForm dataList={dataList} editData={editData} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
        
        </>
    );
}

export default EmployeeData;
