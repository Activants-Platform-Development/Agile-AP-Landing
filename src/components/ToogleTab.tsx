'use client';
import { useEffect, useState } from 'react';

interface toogleProps {
    tabHeaders: any,
    currentIndex: number,
    setCurrentIndex: any,
}
export default function ToogleTab({
    tabHeaders,
    currentIndex,
    setCurrentIndex

}: toogleProps) {

    const activeTabStyle = "bg-primary  text-center p-2 rounded-xl text-sm lg:text-md text-white font-normal lg:font-semibold";
    const defaultTabStyle = "text-center text-secondary font-normal text-sm lg:text-md lg:font-semibold p-2 rounded-xl ";

    return (
        <div className='flex w-full lg:justify-start justify-center'>
            <div
                className={
                    "bg-gray-100 rounded-xl w-full md:w-[50%] " +
                    "flex justify-between"
                }
            ><button
                className={`${currentIndex === 0 ? activeTabStyle : defaultTabStyle}`}
                style={{ width: '50%', minWidth: '2rem' }}
                onClick={() => {
                    setCurrentIndex(0);
                }}
            >{tabHeaders[0]}
                </button>
                <button
                    className={`${currentIndex === 1 ? activeTabStyle : defaultTabStyle}`}
                    style={{ width: '50%', minWidth: '2rem' }}
                    onClick={() => {
                        setCurrentIndex(1);
                    }}
                >{tabHeaders[1]}
                </button>
            </div>
        </div>
    )
}


