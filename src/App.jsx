import "./App.css";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="root" className="w-full m-0 p-0">
      <Hero />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
