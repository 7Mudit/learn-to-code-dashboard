import { Routes, Route } from "react-router-dom";
import OpenRoute from "./components/Auth/OpenRoute";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddCourse from "./components/Dashboard/AddCourse";
import MyCourses from "./components/Dashboard/MyCourses";
import './App.css'
import EditCourse from "./components/Dashboard/EditCourse";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <OpenRoute>
            <Signup />
          </OpenRoute>
        }
      />
      <Route
        path="/verify-email"
        element={
          <OpenRoute>
            <VerifyEmail />
          </OpenRoute>
        }
      ></Route>
      <Route
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="dashboard/add-course" element={<AddCourse />} />
        <Route path="dashboard/my-courses" element={<MyCourses />} />
        <Route
          path="dashboard/edit-course/:courseId"
          element={<EditCourse />}
        />
      </Route>
    </Routes>
  );
}

export default App;
