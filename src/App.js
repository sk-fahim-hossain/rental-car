import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Experts from './Pages/Home/Experts/Experts';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/experts" element={<Experts></Experts>}></Route>
        <Route path="/services/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
