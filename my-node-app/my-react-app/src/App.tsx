import First from "./First";
import Second from "./Second";
import  { Route,Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<First/>} />
            <Route path='/second' element={<Second/>} />
        </Routes>
    );
  }
  
  export default App;