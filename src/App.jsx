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
          phoneNumber: "020000007",
          homeAddress: "GX3000-04",
          jobRole: "Software Developer",
          currentSalary: "$10,000",
          id: Math.random().toString()
        },
        {
          firstName: "Emmanuel",
          lastName: "Mensah",
          email: "mensah@email.com",
          phoneNumber: "020000002",
          homeAddress: "GX4000-85",
          jobRole: "Full Stack Developer",
          currentSalary: "$12,000",
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

  handleDeleteData = (dataId) => {
    const dataSaved = this.state.data.filter((dataList) => {
      return dataList.id !== dataId;
    });
    this.setState({ data: dataSaved });
  };

  handleEditData = (updatedData) => {
    this.setState({
      data: this.state.data.map((dataList) =>
        dataList.id === updatedData.id ? updatedData : dataList
      ),
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
              <h3>Employee List</h3>
                <EmployeeDataList data={this.state.data} deleteData={this.handleDeleteData} editData={this.handleEditData} />
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
