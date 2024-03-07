import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/patients" element={<h1>Patients page</h1>}></Route>
          <Route path="/add-patient" element={<h1>New patient</h1>}></Route>
          <Route path="/patients/:id" element={<h1>Update patient</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
