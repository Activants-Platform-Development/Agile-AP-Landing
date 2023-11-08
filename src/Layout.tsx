import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function Layout() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="flex w-full bg-white flex-col items-center justify-between">
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout