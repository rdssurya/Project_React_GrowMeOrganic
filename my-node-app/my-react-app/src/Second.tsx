import axios from "axios";
import React,{ useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
}
function Second(){
    const [data, setData] = useState<Item[]>([]);
    useEffect(() => {
        componentOne()
          .then((result) => {
            setData(result);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
    const columns: GridColDef[] = [
        { field: 'userid', headerName: 'UserID', width: 90 },
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'body', headerName: 'Body', width: 200 },
      ];
    const componentOne=async ()=>{
        try {
            const response = await axios.get<Item[]>('https://jsonplaceholder.typicode.com/posts');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data');
        }
    }
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    const [checked, setChecked] = useState(false);
  
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    }
    return (
        <><h1>Component 1</h1>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
      />
    </div>
    <h1>Component 2</h1>
    <div>
      <button onClick={toggleCollapse}>
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
      )}
    </div>
    </>
    );
}
export default Second;











