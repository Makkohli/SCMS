// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Companies from './pages/Companies';
import Schedule from './pages/Schedule';
import CompanyDetails from './pages/CompanyDetails';
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile';
import Query from './pages/Query';
import Signup from './auth/signup';
import Login from './auth/login';
import { NotificationsProvider } from './pages/NotificationsContext';
import TeacherDashboard from './pages/TeacherDashboard'; // Import Teacher Dashboard
import Attendance from './pages/Attendance'; // Import Attendance
import ResourceManagement from './pages/ResourceManagement'; // Import the new page


function App() {
  // Initialize authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedExpirationTime = localStorage.getItem('expirationTime');

    if (storedAuth === 'true' && storedExpirationTime) {
      if (Date.now() < parseInt(storedExpirationTime, 10)) {
        return true;
      } else {
        // Session expired
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('role');
        return false;
      }
    }
    return false;
  });

  // Initialize role state
  const [role, setRole] = useState(() => {
    const storedRole = localStorage.getItem('role');
    return storedRole || null;
  });

  // Handle user login
  const handleLogin = (userRole) => {
    console.log("User logged in with role:", userRole);
    const expirationTime = Date.now() + 3600000; // 1 hour from now
    setIsAuthenticated(true);
    setRole(userRole);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('expirationTime', expirationTime.toString());
    localStorage.setItem('role', userRole);
  };

  // Handle user logout
  const handleLogout = () => {
    console.log("User logged out");
    setIsAuthenticated(false);
    setRole(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('role');
  };

  useEffect(() => {
    // Optional: You can add logic here to handle session expiration
  }, []);

  console.log("App Render: isAuthenticated =", isAuthenticated, ", role =", role);

  return (
    <NotificationsProvider>
      <Router>
        <div className="min-h-screen flex bg-[#222222]">
          {isAuthenticated && <Sidebar />}

          <div className={`flex-1 flex flex-col ${isAuthenticated ? 'ml-80' : ''}`}>
            {isAuthenticated && <Header onLogout={handleLogout} />}

            <main className="p-6 flex-1 overflow-auto">
              <Routes>
                {/* Public Routes */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />

                {/* Protected Routes */}
                {/* Admin Dashboard */}
                <Route
                  path="/dashboard"
                  element={
                    isAuthenticated && role === 'admin' ? (
                      <Dashboard />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                {/* Student Dashboard */}
                <Route
                  path="/dashboard/students"
                  element={
                    isAuthenticated && role === 'student' ? (
                      <Students />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                {/* Teacher Dashboard */}
                <Route
                  path="/dashboard/teacher"
                  element={
                    isAuthenticated && role === 'teacher' ? (
                      <TeacherDashboard />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                {/* Attendance Page */}
                <Route
                  path="/dashboard/attendance"
                  element={
                    isAuthenticated && role === 'teacher' ? (
                      <Attendance />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                {/* Resource Management Page */}
                <Route
                  path="/dashboard/resources"
                  element={
                    isAuthenticated && role === 'teacher' ? (
                      <ResourceManagement />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                {/* Other Routes */}
                <Route
                  path="/dashboard/companies"
                  element={
                    isAuthenticated ? <Companies /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/dashboard/schedule"
                  element={
                    isAuthenticated ? <Schedule /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/company/:id"
                  element={
                    isAuthenticated ? <CompanyDetails /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/dashboard/edit-profile"
                  element={
                    isAuthenticated ? <EditProfile /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    isAuthenticated ? <Profile /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/dashboard/query"
                  element={
                    isAuthenticated ? <Query /> : <Navigate to="/login" />
                  }
                />

                {/* Redirect Root Path */}
                <Route
                  path="/"
                  element={
                    isAuthenticated ? (
                      role === 'admin' ? (
                        <Navigate to="/dashboard" />
                      ) : role === 'teacher' ? (
                        <Navigate to="/dashboard/teacher" />
                      ) : (
                        <Navigate to="/dashboard/students" />
                      )
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />

                {/* Catch-All Route */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </NotificationsProvider>
  );
}

export default App;
