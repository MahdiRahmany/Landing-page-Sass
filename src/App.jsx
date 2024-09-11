import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Companies from "./components/Companies/Companies";
import Pricing from "./components/Pricing/Pricing";
import Earning from "./components/Earning/Earning";
import Status from "./components/Status/Status";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Pricing />
      <Earning />
      <Status />
      <Subscribe />
    </>
  );
}

export default App;
