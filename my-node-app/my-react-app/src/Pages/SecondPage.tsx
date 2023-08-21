// import React,{ useState } from 'react';
// import Checkbox from '@mui/material/Checkbox';
import ComponentOne from "./Components/componentOne";
import ComponentTwo from "./Components/componentTwo";
import "../StylesForPages/SecondPage.css";



function SecondPage(){
  const dept = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"]
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"]
    }
  ];
    return (
        <>
        <div className="componentDiv">
          <div id="componentOne">
            <ComponentOne/>
          </div>
          <div id="componentTwo">
        <h1>Component 2</h1>
        {dept.map((dep, index) => (
        <ComponentTwo
          ind={index.toString()}
          name={dep.department}
          subDept={dep.sub_departments}
        />
      ))}
          </div>  
        </div>
    </>
    );
}
export default SecondPage;











