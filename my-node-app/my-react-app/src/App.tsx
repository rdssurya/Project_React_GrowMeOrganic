import First from "./First";
import Second from "./Second";
import  { Route,Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<First/>} />
            <Route path='/second' element={<Second/>} />
        </Routes>
        
        // <Routes>
        // <Route path="/" component={}>
        //     <First />
        // </Route>
        // </Routes>
        // <><First/></>
    );
  }
  
  export default App;