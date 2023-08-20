import axios from "axios";
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
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
    </>
    );
}
export default Second;