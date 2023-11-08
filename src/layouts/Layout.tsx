import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react";


function Layout() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex w-full bg-white flex-col items-center justify-between">
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout