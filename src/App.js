import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";

function App() {
  return (
    <div className="App">
 <BrowserRouter> 
 <Routes>
   <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}/> {/* Home is the child of layout. I want to show Home with Layout */}
      <Route path='contact' element={<Contact/>}/> {/* Only component can share parent that's why we cannot write index again */}
       <Route path='login' element={<LoginReg/>}/>
      </Route>
 </Routes>

 </BrowserRouter>

      
    </div>
  );
}

export default App;
