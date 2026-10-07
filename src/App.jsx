import Login from "./components/login";
import Register from "./components/Register";
import { Route,Routes} from "react-router-dom";
import RealSignIn from "./components/RealSignIn";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signIn" element={<Register/>} />
        <Route path="/realsignin" element={<RealSignIn/>} />
      </Routes>
    </div>
  );
};

export default App;