import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AnimateRoutes from "./components/AnimateRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="title-nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Widgets-Box</h1>
          </Link>
        </div>
         <AnimateRoutes />
      </div>
    </Router>
  );
}

export default App;
