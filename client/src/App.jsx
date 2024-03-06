import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/register" element={<h1>Register</h1>}></Route>
        <Route path="/patients" element={<h1>Patients page</h1>}></Route>
        <Route path="/add-patient" element={<h1>New patient</h1>}></Route>
        <Route path="/patients/:id" element={<h1>Update patient</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
