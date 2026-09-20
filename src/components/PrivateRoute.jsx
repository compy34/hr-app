import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Parse from '../services/parse.js'

export default function PrivateRoute() {
    const currentUser = Parse.User.current(); // Исправлено: User с большой буквы

    return currentUser ? <Outlet /> : <Navigate to="/login" /> // Исправлен путь редиректа
}