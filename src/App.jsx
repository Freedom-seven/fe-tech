import React, { Component } from 'react';
import EmployeeDataForm from './Components/EmployeeDataForm';
import EmployeeDataList from './Components/EmployeeDataList';
import Home from './Components/Home';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          firstName: "Freedom",
          lastName: "Nanewortor",
          email: "freedom@email.com",
          phoneNumber: "020000002",
          homeAddress: "GX3000-04",
          jobRole: "Software Developer",
          currentSalary: "$10,000"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Home />
        <EmployeeDataForm />
        <EmployeeDataList data={this.state.data} />
      </div>
    );
  }
}

export default App;
