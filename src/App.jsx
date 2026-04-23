import Hero from "./components/Hero/Hero"
import ToursGrid from "./components/Tours/ToursGrid"
import TourSearch from "./components/TourSearch/TourSearch"
import Header from "./layout/Header/Header"

const App = () => {
    return (
        <div className="container-app">
            <Header />
            <Hero />
            <TourSearch />
            <ToursGrid />
        </div>
    )
}

export default App

