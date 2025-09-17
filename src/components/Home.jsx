import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Training from "./Training";
import Success from "./Success";
import Program from "./Program"
import Journey from "./Journey";

function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Program />
      <Services />
      <Training />
      <Success />
     <Journey />
     <Footer/>
    </div>
  );
}
export default Home;