import Hero from "./components/Hero/Hero"
import ToursGrid from "./components/Tours/ToursGrid"
import TourSearch from "./components/TourSearch/TourSearch"
import Header from "./layout/Header/Header"
// import AboutCompanyPage from "./pages/AboutCompanyPage/AboutCompanyPage"

const App = () => {
    return (
        <div className="container-app">
            <Header />
            <Hero />
            <TourSearch />
            <ToursGrid />
            {/* <AboutCompanyPage /> */}
        </div>
    )
}

export default App

