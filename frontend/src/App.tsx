import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages";
import routes from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.signup} element={<Signup />} />
    </Routes>
  );
};

export default App;
