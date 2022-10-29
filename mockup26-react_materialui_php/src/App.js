import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Company from "./Company";
import List from "./List";
import Planning from "./Planning";
import Award from "./Award";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Company />
      <List />
      <Planning />
      <Award />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
