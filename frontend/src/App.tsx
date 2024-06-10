import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import {
  ActivationPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  SignupPage,
} from "./pages";
import routes from "./routes";
import { Layout } from "./layouts";
import * as api from "./utils/api";
import { setLoadUserError, setLoadUserSuccess } from "./redux/actions/auth";
import { AxiosError } from "./components/Signup/Signup";

const App = () => {
  const dispatch = useDispatch();

  useQuery("validateToken", api.validateToken, {
    onSuccess(data) {
      dispatch(setLoadUserSuccess(data.user));
    },
    onError(err) {
      const error = err as AxiosError;
      dispatch(
        setLoadUserError(
          error?.response?.data?.message ||
            "You don't have access to perform this action"
        )
      );
    },
    retry: false,
  });

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
