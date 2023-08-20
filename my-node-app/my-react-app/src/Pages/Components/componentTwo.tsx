// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';

// const arr=[{"department": "customer_service","sub_departments": ["support","customer_success"]},{"department": "design","sub_departments": ["graphic_design","product_design","web_design"]}];

// import React, { useState } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// function ComponentTwo(){
//     function CollapsibleButton() {
//         const [isCollapsed, setIsCollapsed] = useState(true);
      
//         const toggleCollapse = () => {
//           setIsCollapsed(!isCollapsed);
//         };
      
//         return (
//           <div>
//               {isCollapsed ? (<button onClick={toggleCollapse}>+</button>) : (<button onClick={toggleCollapse}>-</button>)}
//             {!isCollapsed && (
//               <div>
//                 <p></p>
//               </div>
//             )}
//           </div>
//         );
//       }
    
//     function CreatingCheckBox(item){
//         const [checked, setChecked] = useState(false);

//         const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//             setChecked(event.target.checked);
//         };
        
//         return (
//             <label>
//             <Checkbox
//                 checked={checked}
//                 onChange={handleCheckboxChange}
//                 color="primary"
//             />
//             {item}
//             </label>
//         );
//     }
// }

import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Button,
  ButtonGroup,
} from '@mui/material';

interface Department {
  department: string;
  sub_departments: string[];
}

const departmentsData: Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

function CollapsibleCheckboxList() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleCollapse = (department: Department) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(department.department)
        ? prevSelectedItems.filter((item) => item !== department.department)
        : [...prevSelectedItems, department.department]
    );
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedItems.includes(value)) {
      // Uncheck the sub-department
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== value)
      );
      // Check if all sub-departments are still selected
      const parentDepartment = departmentsData.find(
        (departmentData) =>
          departmentData.sub_departments.includes(value) &&
          !selectedItems.includes(departmentData.department)
      );
      if (parentDepartment) {
        // Uncheck the parent department
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter(
            (item) => item !== parentDepartment.department
          )
        );
      }
    } else {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        value,
      ]);
      const parentDepartment = departmentsData.find(
        (departmentData) =>
          departmentData.sub_departments.includes(value) &&
          !selectedItems.includes(departmentData.department)
      );
      if (parentDepartment) {
        // Check the parent department if all its sub-departments are selected
        const allSubDepartmentsSelected = parentDepartment.sub_departments.every(
          (subDept) => selectedItems.includes(subDept)
        );
        if (allSubDepartmentsSelected) {
          setSelectedItems((prevSelectedItems) => [
            ...prevSelectedItems,
            parentDepartment.department,
          ]);
        }
      }
    }
  };

  return (
    <div>
      {departmentsData.map((departmentData) => (
        <div key={departmentData.department}>
          <ButtonGroup>
            <Button onClick={() => toggleCollapse(departmentData)}>
              {selectedItems.includes(departmentData.department)
                ? 'Collapse'
                : 'Expand'}
            </Button>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.includes(departmentData.department)}
                  onChange={() => handleCheckboxChange({
                    target: {
                      value: departmentData.department,
                    }
                  } as React.ChangeEvent<HTMLInputElement>)}
                  value={departmentData.department}
                />
              }
              label={departmentData.department}
            />
          </ButtonGroup>
          {selectedItems.includes(departmentData.department) && (
            <div>
              {departmentData.sub_departments.map((subDepartment) => (
                <FormControlLabel
                  key={subDepartment}
                  control={
                    <Checkbox
                      checked={selectedItems.includes(subDepartment)}
                      onChange={() => handleCheckboxChange({
                        target: {
                          value: subDepartment,
                        }
                      } as React.ChangeEvent<HTMLInputElement>)}
                      value={subDepartment}
                    />
                  }
                  label={subDepartment}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CollapsibleCheckboxList;

