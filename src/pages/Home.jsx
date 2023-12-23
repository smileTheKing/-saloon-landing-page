import Category from "../component/Category";
import Favorite from "../component/Favorite";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Newletter from "../component/Newletter";
import Service from "../component/Service";

const Home = () => {
  return (
    <>
     
      <Hero />
      <Category />
      <Service />
      <Favorite />
      <Newletter />
      
    </>
  );
};

export default Home;
