import { Layout } from "./components/Layout"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Products } from "./components/Products";
import { Profile } from "./components/Profile";
import {Login} from "./components/Login"

function App() {

  return (
    
      <Routes>

        <Route path="/" element={<Layout />}>
			<Route index element={<Login/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
			 <Route path="/Search"	element={<Search/>} />
			 <Route path="/Products" element={<Products/>}/>
			 <Route path="/Profile" element={<Profile/>}/>
        </Route>
      </Routes>

   
  )
}

export default App
