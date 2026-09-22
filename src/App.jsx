import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import MyNavBar from './components/MyNavBar.jsx'

import Login from './pages/Login.jsx'
import Reports from './pages/Reports.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Departments from './pages/Departments.jsx'
import Employees from './pages/Employees.jsx'
export default function App() {

  return (
    <div className="app">
        <Router>
            <header className="header">
                <MyNavBar />
        <h2 className="mt-3" style={{color: 'purple'}}>HR DEPARTMENT</h2>
                <h5 style={{color: 'teal'}}>
                    system managment hr department
                </h5>

      </header>
            <main className="container" style={{minHeight: '68vh'}}>
                <hr/>
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route element={<PrivateRoute/>} >
                        <Route path='/' element={<Dashboard/>} />
                        <Route path='/reports' element={<Reports/>} />
                        <Route path='/employees' element={<Employees/>} />
                        <Route path='/departments' element={<Departments/>} />
                    </Route>
                    <Route path='*' element={<Navigate to='/login'/>} />
                </Routes>
            </main>
            <footer className="container">
                <hr/>
                <h6 style={{ color: 'gray', fontStyle: 'italic' }}>
                    HR DEPARTMENT &copy; MyCompany@trade - Kyiv, {new Date().getFullYear()}
                </h6>
            </footer>
        </Router>
      </div>
  )

}

