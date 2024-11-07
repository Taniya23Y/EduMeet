import "./App.css";
import Hero from "./components/Layout/Hero.jsx";
import NavBar from "./components/Layout/NavBar.jsx";

const App = () => {
  return (
    <>
      <main className="overflow-hidden">
        <NavBar />
        <Hero />
      </main>
    </>
  );
};

export default App;
