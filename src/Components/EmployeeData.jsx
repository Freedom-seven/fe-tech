import React from 'react';

const EmployeeData = ({dataList}) => {
    return (
        <div>
            <p>First Name: <strong>{dataList.firstName}</strong> </p>
            <p>Last Name: <strong>{dataList.lastName}</strong> </p>
            <p>Email: <strong>{dataList.email}</strong> </p>
            <p>Phone Number: <strong>{dataList.phoneNumber}</strong> </p>
            <p>Home Address: <strong>{dataList.homeAddress}</strong> </p>
            <p>Job Role: <strong>{dataList.jobRole}</strong> </p>
            <p>Current Salary: <strong>{dataList.currentSalary}</strong> </p>
        </div>
    );
}

export default EmployeeData;
