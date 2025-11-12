import { Route, Router, Routes } from "react-router"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import AddMovie from "./components/AddMovie/AddMovie"
import EditMovie from "./components/EditMovie/EditMovie"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/AddMovie" element={<AddMovie/>}/> 
        <Route path="/EditMovie/:id" element={<EditMovie/>}></Route>
      </Routes>
    </>
  )
}

export default App
