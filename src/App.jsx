import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details"
import { useSelector } from 'react-redux';
import Basket from "./pages/Basket";
import Header from "./components/Header";
import About from "./pages/About";
function App() {
  let products = useSelector((store) => store.products )
  // console.log(products);
  
let arr = [1,2,3,4]

  localStorage.setItem("arr",JSON.stringify(arr))
  let item = JSON.parse(localStorage.getItem("arr"))
  console.log(item);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/:id" element={<Details/>}/>
      </Routes>
     
    </div>
  );
}

export default App;