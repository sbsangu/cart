import React from 'react';
import {BrowserRouter ,Routes,Route, } from "react-router-dom"
import About from './components/about/About';
import ForgetPassword from './components/auth/ForgetPassword';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Resetpassword from './components/auth/Resetpassword';
import Contact from './components/layout/Contact';
import Courses from './components/courses/Courses';
 import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Request from './components/layout/Request';
import Subscribe from './components/payments/Subscribe'
import PaymentSuccess from "./components/payments/PaymentSuccess"
import PaymentFail from "./components/payments/PaymentFail"
import NotFound from "./components/layout/NotFound/NotFound"
import CoursePage from './components/coursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/admin/dashboard/Dashboard';
import Users from './components/admin/Users/Users';
import CreateCourse from './components/admin/CreateCourse/CreateCourse';
import   AdminCourses  from './components/admin/admincourses/AdminCourses';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursePage/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>} />
        <Route path='/resetpassword/:token' element={<Resetpassword/>}/>
        <Route path='/about' element={<About/>}/>
      <Route path='/subscribe' element={<Subscribe/>} />
      <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
      <Route path='/paymentfail' element={<PaymentFail/>} />
      <Route path='/*' element={<NotFound/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/updateprofile" element={<UpdateProfile/>}/>
      <Route path="/changepassword" element={<ChangePassword/>}/>


<Route path="/contact" element={<Contact/>} />
{/* admin routes */}


<Route path="/admin/dashboard"  element={<Dashboard/>}/>

<Route path="/admin/users"  element={<Users/>}/>

<Route path="/admin/createcourse"  element={<CreateCourse/>}/>

<Route path="/admin/courses"  element={<AdminCourses/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
