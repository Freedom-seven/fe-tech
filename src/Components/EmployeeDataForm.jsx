import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class EmployeeDataForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          homeAddress: "",
          jobRole: "",
          currentSalary: ""
        }
    }

    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
  
    <Form.Group controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="First Name" value={this.state.firstName} onChange={this.handleChange} placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="Last Name" value={this.state.lastName} onChange={this.handleChange}  placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" value={this.state.email} onChange={this.handleChange}  placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formGridPhoneNUmber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="number" value={this.state.phoneNumber} onChange={this.handleChange}  placeholder="Enter Phone Nnmber" />
    </Form.Group>
 

  <Form.Group className="mb-3" controlId="formGridHomeAddress">
    <Form.Label>Home Address</Form.Label>
    <Form.Control type="home Address" value={this.state.homeAddress} onChange={this.handleChange}  placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridJobRole">
    <Form.Label>Job Role</Form.Label>
    <Form.Control type="jobRole" value={this.state.jobRole} onChange={this.handleChange}  placeholder="Enter Job Role" />
  </Form.Group>

  <Form.Group controlId="formGridCurrentSalary">
      <Form.Label>Current Salary</Form.Label>
      <Form.Control type="number" value={this.state.currentSalary} onChange={this.handleChange}  placeholder="Enter Current Salary" />
    </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        );
    }
}

export default EmployeeDataForm;
