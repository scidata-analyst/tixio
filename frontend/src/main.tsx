import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import UserList from './pages/UserList.tsx'
import UserView from './pages/UserView.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:id" element={<UserView />} />
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
