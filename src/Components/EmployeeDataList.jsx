import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EmployeeData from './EmployeeData';


const EmployeeDataList = ({data}) => {
    const employeeDataList = data.map((dataList) => {
        return (
            <EmployeeData dataList={dataList} />
        );
    });
    return (
        <div>
            <Container>
                <Row>
                   {employeeDataList} 
                </Row>
            </Container>
            
        </div>
    );
}

export default EmployeeDataList;
