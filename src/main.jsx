import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CatalogPage from './pages/catalog/CatalogPage.jsx'
import ContactPage from './pages/contacts/ContactPage.jsx'
import AboutCompanyPage from './pages/about-company/AboutCompanyPage.jsx'
import BlogPage from './pages/blog/BlogPage.jsx'
import NewsPage from './pages/news/NewsPage.jsx'
import "./service/tourService.js"
import "./service/companyService.js"
// import



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />

        <Routes>
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/about-company" element={<AboutCompanyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/news" element={<NewsPage />} />
        </Routes>
    </BrowserRouter>
)
