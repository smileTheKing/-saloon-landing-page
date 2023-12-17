import Category from "./component/Category"
import Favorite from "./component/Favorite"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Newletter from "./component/Newletter"
import Service from "./component/Service"

function App() {
 
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Category/>
     <Service/>
     <Favorite/>
     <Newletter/>
     <Footer/>
    </div>
  )
}

export default App
