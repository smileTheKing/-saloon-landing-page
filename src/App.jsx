import Category from "./component/Category"
import Favorite from "./component/Favorite"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Newletter from "./component/Newletter"
import Service from "./component/Service"
import ProtectedRoute from "./util/ProtectedRoute"
import AppContext from "./util/context/AppContext"

function App() {
 
  return (
    <>
     <AppContext>
     <ProtectedRoute>
     <Navbar/>
     <Hero/>
     <Category/>
     <Service/>
     <Favorite/>
     <Newletter/>
     <Footer/>
     </ProtectedRoute>
     </AppContext>
     
     
    </>
  )
}

export default App
