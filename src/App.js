import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GettingStarted from "./components/GettingStarted";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Navbar from "./components/Navbar";
import Testimony from "./components/Testimony";
import Trustee from "./components/Trustee";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trustee />
      <Features />
      <Management />
      <Testimony />
      <GettingStarted />
      <Footer />
    </div>
  );
}

export default App;
