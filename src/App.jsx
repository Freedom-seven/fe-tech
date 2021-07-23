import React, { Component } from 'react';

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
        
      </div>
    );
  }
}

export default App;
