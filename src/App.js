import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="container">
     <Navbar/>
      <div className="body flex">body</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
