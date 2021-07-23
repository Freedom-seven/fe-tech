import React from 'react';
import EmployeeData from './EmployeeData';


const EmployeeDataList = ({data}) => {
    const employeeDataList = data.map((dataList) => {
        return (
            <EmployeeData dataList={dataList} />
        );
    });
    return (
        <div>
            {employeeDataList}
        </div>
    );
}

export default EmployeeDataList;
