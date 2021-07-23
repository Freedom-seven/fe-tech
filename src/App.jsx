import React, { Component } from "react";
import EmployeeDataForm from "./Components/EmployeeDataForm";
import EmployeeDataList from "./Components/EmployeeDataList";
import Home from "./Components/Home";
import {Container, Row, Col} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          firstName: "Freedom",
          lastName: "Nanewortor",
          email: "freedom@email.com",
          phoneNumber: "020000002",
          homeAddress: "GX3000-04",
          jobRole: "Software Developer",
          currentSalary: "$10,000",
          id: Math.random().toString()
        },
      ],
    };
  }
  
  handleAddData = (newEmployee) => {
    newEmployee.id = Math.random().toString();
    this.setState({
      data: [...this.state.data, newEmployee],
    });
  };
  render() {
    return (
      <>
        <Container>
          <div className="Container">
            <Home />
            <Row>
              <Col sm="12" md="4" lg="4">
                <EmployeeDataForm addData={this.handleAddData} />
              </Col>
              <Col>
                <EmployeeDataList data={this.state.data} />
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
