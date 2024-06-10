import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useShowToast } from "../hooks/useShowToast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useShowToast();

  return (
    <div className="relative">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ width: "400px" }}
      />
      {children}
    </div>
  );
};

export default Layout;
