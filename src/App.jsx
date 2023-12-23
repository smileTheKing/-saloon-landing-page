
import Footer from "./component/Footer";
import Navbar from "./component/Navbar"
import Booking from "./pages/Booking";
import Home from "./pages/Home"
import ProtectedRoute from "./util/ProtectedRoute"
import AppContext from "./util/context/AppContext";

import { BrowserRouter , Routes, Route,Outlet, } from "react-router-dom";



const Layout = ()=>{
  return(
    <>
      <Navbar/>
       <Outlet/>
      <Footer/>
    </>
   
  )
}


const NoPage = () => {
  return (
    <div className="text-5xl text-center h-screen w-full flex flex-col justify-center">404 return back</div>
  )
}





function App() {
 
  return (
    <>
     <AppContext>
     {/* <ProtectedRoute>
     
     <Hero/>
     <Category/>
     <Service/>
     <Favorite/>
     <Newletter/>
     <Footer/>
     </ProtectedRoute> */}

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking /> } />

          <Route path="*" element={<NoPage />} />
          </Route>
          
        </Routes>

     </BrowserRouter>
     </AppContext>

     
     
    </>
  )
}

export default App
