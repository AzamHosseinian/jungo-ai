import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Feature from "./components/Features/Feature";
import Philosophy from "./components/Philosophy/Philosophy";
import UseCases from "./components/UseCases/UseCases";
// import News from "./components/News/News";

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url('/assets/images/bgImage.svg')`,
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          opacity: 0.5, // 50% opacity for background
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <Feature />
        <UseCases />
        {/* <News /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
