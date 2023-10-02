"use client";
import { useEffect, useState } from "react";
// import AgileAppLogo from "../assets/svg/agileAp-Logo-Standard1.svg";
import { AgileAppLogo } from "../assets/svg"

interface NavbarProps { }
const Navbar: React.FC<NavbarProps> = () => {
    const [currentSection, setCurrentSection] = useState("");

    const handleOpenSideBar = () => {
        const menu: any = document.querySelector("#navbar-default");
        menu.classList.toggle("hidden");
    };

    const handleChangeSection = (section: string) => {
        setCurrentSection(section);
        scrollToSection(section);
        const menu: any = document.querySelector("#navbar-default");
        menu.classList.toggle("hidden");
    };

    const scrollToSection = (id: any) => {
        const section = document.getElementById(id.replace("#", ""));

        console.log(section, id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };

    const [baseName, setBaseName] = useState(process.env.REACT_APP_BASENAME ? process.env.REACT_APP_BASENAME : "");
    const [appUrl, setAppUrl] = useState(process.env.REACT_APP_URL ? process.env.REACT_APP_URL : "");

    const handleClick = () => {
        window.location.href = appUrl;
    };

    return (
        <nav className="bg-white flex sticky w-full z-20 top-0 left-0 justify-center pb-4">
            <div className=" flex flex-wrap items-center justify-between py-4  w-lgMain">
                <a href={baseName} onClick={() => handleChangeSection("#home")} className="flex items-center">
                    <AgileAppLogo width={147} />
                </a>
                <button
                    type="button"
                    onClick={handleOpenSideBar}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden md:relative absolute top-14 lg:top-auto md:top-auto right-0  ml-1 w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium text-secondary text-sm flex flex-col p-4 gap-y-2  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:border-0 md:bg-white lg:gap-10">
                        <li
                            className={`${currentSection === "#home" ? "bg-primary text-white" : "hover:bg-gray-10"
                                } rounded px-2 md:border-0 border-b border-gray-200 cursor-pointer`}
                        >
                            <a onClick={() => handleChangeSection("#home")} className="block py-2" aria-current="page">
                                How It Works
                            </a>
                        </li>
                        <li
                            className={`${currentSection === "#ourwork" ? "bg-primary text-white" : "hover:bg-gray-100"
                                } flex rounded px-2 md:border-0 border-b border-gray-200 cursor-pointer`}
                        >
                            <a onClick={() => handleChangeSection("#ourwork")} className="block py-2 rounded ">
                                Our Work
                            </a>
                        </li>
                        {/* <li onClick={() => handleChangeSection("#services")} className={`${currentSection === '#services' ? 'bg-primary text-white' : 'hover:bg-gray-100'} rounded px-2 md:border-0 border-b border-gray-200`}>
                            <a href="#services" className="block py-2 rounded">Services</a>
                        </li> */}
                        <li
                            className={`${currentSection === "#pricing" ? "bg-primary text-white" : "hover:bg-gray-100"
                                } rounded px-2 md:border-0 border-b border-gray-200 cursor-pointer`}
                        >
                            <a onClick={() => handleChangeSection("#pricing")} className="block py-2 rounded">
                                Pricing
                            </a>
                        </li>
                        <li
                            className={`${currentSection === "#aboutus" ? "bg-primary text-white" : "hover:bg-gray-100"
                                } px-2 md:border-0 rounded border-b border-gray-200 cursor-pointer`}
                        >
                            <a onClick={() => handleChangeSection("#aboutus")} className="block py-2 rounded ">
                                About Us
                            </a>
                        </li>
                        <li className="lg:hidden bg-primary w-fit rounded-xl text-white md:hidden px-4 lg:px-0 md:px-0 md:flex"
                            onClick={() => {
                                handleClick();
                            }}>
                            <a className="block py-2 rounded cursor-pointer">
                                Login Now
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block text-xs order-2">
                    <button
                        type="button"
                        onClick={() => {
                            handleClick();
                        }}
                        className="font-medium text-white bg-primary rounded-lg hover:ring-0 hover:outline-none hover:bg-opacity-70 active:bg-opacity-50 font-medium rounded-xl text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                    >
                        Login Now
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
