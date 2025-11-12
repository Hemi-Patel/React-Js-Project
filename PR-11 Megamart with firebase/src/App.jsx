import { Route, Routes } from "react-router"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import AddMenClothes from "./Components/Add/AddMenClothes"
import MenClothes from "./Components/Men/MenClothes"
import EditProduct from "./Components/Edit/EditProduct"
import WomenClothes from "./Components/Women/WomenClothes"
// import ViewProduct from "./Components/View/ViewProduct"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddMenClothes />}></Route>
        <Route path="/menclothes" element={<MenClothes />}></Route>
        <Route path="/womenclothes" element={<WomenClothes />}></Route>
        <Route path="/editproduct/:id" element={<EditProduct />}></Route>
      </Routes>
    </>
  )
}

export default App
