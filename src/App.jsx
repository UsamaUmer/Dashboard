import { useState } from "react";
import "./App.css";
import AppRoutes from './routes/AppRoutes';
// import LoginPage from "./components/auth/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LoginPage></LoginPage> */}
    <AppRoutes></AppRoutes>
      
    </>
  );
}

export default App;
