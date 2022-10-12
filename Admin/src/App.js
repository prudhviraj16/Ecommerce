import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import Product from './pages/Product/Product';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { useSelector } from "react-redux";
import Login from './pages/login/Login';

const App = () => {
  
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin

  // console.log(admin)
  return (
      <Router>
            {!admin?<Routes>
                <Route path="/" element={<Login/>}/>
            </Routes> : <>
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <Routes> 
                <Route exact path="/" element={<Home />}/>
                <Route path="/newproduct" element={<NewProduct />}/>
                <Route path="/product/:productId" element={<Product />}/>  
                <Route path="/users" element={<UserList />}/>
                <Route path="/user/:userId" element={<User />}/>
                <Route path="/newUser" element={<NewUser />}/>
                <Route path="/products" element={<ProductList />}/>
              </Routes>
            </div>
            </>}
      </Router>
  )
}

export default App