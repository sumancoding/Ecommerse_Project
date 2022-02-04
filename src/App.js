import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <div className="App">
 <BrowserRouter> 
 <Routes>
   <Route path="/" element={<Layout/>}> </Route>
 </Routes>

 </BrowserRouter>

      
    </div>
  );
}

export default App;
