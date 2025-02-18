import React from 'react'

function FirstApp({sal, desig, com}) {
  return (
    <div>
       <p>Salary: {sal}</p>
       <p>Designation: {desig}</p>
       <p>Company: {com}</p>
    </div>
  );
}

export default FirstApp;