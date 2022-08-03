import logo from "./logo.svg";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer hideProgressBar={true} />
      <AppRoutes />
    </>
  );
}

export default App;
