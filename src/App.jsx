import { Provider } from "react-redux";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import store from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "./Component/Logout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
