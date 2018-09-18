import React from 'react';
import Table from './table';

export default ()=>{
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

const students = [
    {
        student: 'Torie Pham',
        course: 'Psychology',
        grade: '85'
    },
    {
        student:'Mia Tran',
        course: 'Economics',
        grade: '100'
    },
    {
        student:'Timmy Token',
        course: 'Anthropology',
        grade: '90'
    }
];
