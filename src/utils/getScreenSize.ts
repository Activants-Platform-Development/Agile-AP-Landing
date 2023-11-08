import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        function handleLoad() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleLoad);

        // Set the initial dimensions in case the component is mounted after the 'load' event
        setWindowDimensions(getWindowDimensions());

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return windowDimensions;
};
