import axios from "axios";
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Item {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function ComponentOne(){
    const [data, setData] = useState<Item[]>([]);

    // useEffect()--- to control the lifecycle methods
    useEffect(() => {
        apiCall()
          .then((result) => {
            setData(result);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    
    // defining the column headers
    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'UserID', width: 90 },
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 180 },
        { field: 'body', headerName: 'Body', width: 200 },
    ];
    
    
    // making the API call to retrieve the data
    const apiCall=async ()=>{
        try {

            //if api call is a success return the JSON data
            const response = await axios.get<Item[]>('https://jsonplaceholder.typicode.com/posts');
            return response.data;

        } catch (error) {

            // alert the user with the error
            alert(error);
            throw new Error('Error fetching data');

        }
    }


    return (
        <>
        <h1>Component 1</h1>
        <div style={{ height: 550, width: '100%' }}>
              <DataGrid
              rows={data}
              columns={columns}
              checkboxSelection
        disableRowSelectionOnClick
              />
        </div>
        </>
    );
}
export default ComponentOne;