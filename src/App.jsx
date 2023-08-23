import "./App.css";
import Card from "./Components/Card";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="bg-red-40 h-[100vh] overflow-x-hidden ">
        <Navbar />

        <Card />
      </div>
    </>
  );
}

export default App;
