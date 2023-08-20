import React,{ useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ComponentOne from "./Components/componentOne";
import "../StylesForPages/SecondPage.css";
import CollapsibleCheckboxList from './Components/componentTwo';

function SecondPage(){
    // const [isCollapsed, setIsCollapsed] = useState(true);

    // const toggleCollapse = () => {
    //   setIsCollapsed(!isCollapsed);
    // };

    // const [checked, setChecked] = useState(false);
  
    // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setChecked(event.target.checked);
    // }
    return (
        <>
        <div className="componentDiv">
          <div id="componentOne">
            <ComponentOne/>
          </div>
          <div id="componentTwo">
        <h1>Component 2</h1>
          {/* <button onClick={toggleCollapse}>
            {isCollapsed ? 'Show Content' : 'Hide Content'}
          </button>
          {!isCollapsed && (
            <div>
              <label>
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
                Check this box
              </label>
            </div>
          )} */}
          <CollapsibleCheckboxList/>
          </div>  
        </div>
    </>
    );
}
export default SecondPage;











