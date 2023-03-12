import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/' element={
            <ProtectedRoute>
            </ProtectedRoute>
          }>
            

          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
