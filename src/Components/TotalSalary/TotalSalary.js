import React from 'react';

const TotalSalary = (props) => {
    const count=props.count;
    let totalSalary= 0;
    for (let i = 0; i < count.length; i++) {
        const user = count[i];
        totalSalary = totalSalary + user.yearly_income;
    }

    return (
        <div>
        <h3>Country added : {count.length}</h3>
        <h3>Total yearly salary : $ {Math.round(totalSalary)}</h3>
        </div>
    );
};

export default TotalSalary;