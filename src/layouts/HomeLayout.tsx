import * as React from "react";
import { useEffect, useState, useContext } from "react";

import logo_web from "../../assets/quick_logo_web.png";


import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../utils/getScreenSize";
import Header from "../components/Header";
import { Loader } from "../components/Loader";
import Footer from "../components/Footer";
import { colors } from "../constants/colourConfigurations";


interface Home_DesktopProps {
    mainContent: React.ReactNode;
    currentPage?: string;
    showOverlay?: boolean;
    overlayContent?: React.ReactNode;
    overlayStyleClass?: string;
    overlayWidth?: string;
    overlayHeight?: string;
    handleOverlayExit?: () => void;
    isLoading?: boolean;
    loadingMessage?: string;
    showHeader?: boolean;
    showFooter?: boolean;
}

export const HomeLayout = ({
    mainContent,
    currentPage,
    showOverlay,
    overlayContent,
    overlayStyleClass,
    overlayHeight,
    overlayWidth,
    handleOverlayExit = () => {
    },
    isLoading = false,
    loadingMessage,
    showHeader = true,
    showFooter = true,
}: Home_DesktopProps) => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex w-full bg-white flex-col items-center justify-between">
            {showHeader && <Header currentPage={currentPage} />}
            {isLoading === false && <div id={"mainBody"}>{mainContent}</div>}
            {isLoading == true && (
                <div className={'w-full grid grid-cols-1 content-center '}>
                    <div className={'flex w-full justify-center '}>
                        <Loader size={75} className={'flex'} visibility={true} colour={colors.primary}
                            loadingText={''} />
                    </div>
                    <div className="flex w-full justify-center pt-2 font-bold text-primary">{loadingMessage}</div>
                </div>
            )}
            {showFooter && <Footer />}
        </div>
    );
};
