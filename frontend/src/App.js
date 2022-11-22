import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
function App() {
    return (
        <div id="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
