import { Routes, Route } from "react-router-dom";
import {
  ActivationPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  SignupPage,
} from "./pages";
import routes from "./routes";
import { Layout } from "./Layouts";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.signin} element={<LoginPage />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route
          path={`${routes.activationLink}/:token`}
          element={<ActivationPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
