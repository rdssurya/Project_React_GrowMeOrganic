import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import  { Route,Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<FirstPage/>} />
            <Route path='/second' element={<SecondPage/>} />
        </Routes>
    );
  }
  
  export default App;