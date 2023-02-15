import React from 'react'
import type CardTemplateInterface from './cardTemplateInterface'

export default function ServerCardTemplate (props: CardTemplateInterface): JSX.Element {
    return (
        <div className="flex flex-col w-full">
            <div className="flex space-x-2 max-sm:flex-col max-sm:space-y-3 max-sm:space-x-0 w-full">
                <div className="flex flex-col w-2/3 max-sm:w-full">
                    <div className="flex justify-between mx-2">
                        <div className="flex">
                            <div className="flex">
                                <span className="mr-2 mt-0.5">
                                    #1
                                </span>
                                <span>
                                    <h2 className="font-gilroy text-[#4f5b6c] text-xl">
                                        {props.name}
                                    </h2>
                                </span>
                            </div>
                        </div>
                        <div className="flex font-gilroy text-[#4f5b6c] space-x-3">
                            <span className="flex space-x-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} className="w-[18px] h-[18px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19,0H5A3,3,0,0,0,2,3v8H22V3A3,3,0,0,0,19,0ZM14,7H10V5h4Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2,13V24H22V13Zm12,6H10V17h4Z" />
                                </svg>
                                <h3>
                                    {props.version}
                                </h3>
                            </span>
                            <span className="flex items-center space-x-2 text-[#50b25a]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5,13A4.5,4.5,0,1,1,12,8.5,4.505,4.505,0,0,1,7.5,13ZM15,20a5.006,5.006,0,0,0-5-5H5a5.006,5.006,0,0,0-5,5v4H15ZM17.5,9A4.5,4.5,0,1,1,22,4.5,4.505,4.505,0,0,1,17.5,9ZM19,11H14a4.793,4.793,0,0,0-.524.053A6.514,6.514,0,0,1,11.9,13.269,7.008,7.008,0,0,1,17,20h7V16A5.006,5.006,0,0,0,19,11Z" />
                                </svg>
                                {/* <UsersIcon className="h-6 w-6" /> */}
                                <h3>
                                    {props.usersOnline}
                                </h3>
                            </span>

                        </div>

                    </div>
                    <div className="w-full mt-3">
                        <video className="rounded-xl w-full" autoPlay={true} loop={true} muted={true} playsInline={true}>
                            <source type="video/mp4" src={props.serverVideo}/>
                        </video>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 w-1/3 max-sm:w-full max-sm:flex-row max-sm:space-x-2 max-sm:space-y-0">
                    <div className="py-1 bg-project_tile w-full flex space-x-0.5 justify-center items-center h-full font-gilroy text-[#4f5b6c] text-lg rounded-lg hover:duration-[1000ms] hover:bg-project_tile_hover">
                        <span>
                            {props.serverLink.toUpperCase()}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>
                    </div>
                    <button className="bg-[#2EA548] hover:bg-[#118a25] hover:duration-[1000ms] w-full flex space-x-1 justify-center items-center h-full font-sourse_sans_pro text-[#fff] text-lg rounded-lg py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M23.352.648a2.189,2.189,0,0,0-2.31-.514l-.216.077A32.5,32.5,0,0,0,8,8a36.107,36.107,0,0,0-4.7,6.645L5.586,17,3,19.586,4.414,21,7,18.414l2.32,2.32a36.149,36.149,0,0,0,6.644-4.7A32.74,32.74,0,0,0,23.791,3.169l.075-.211A2.189,2.189,0,0,0,23.352.648ZM11,14a1,1,0,1,1,1-1A1,1,0,0,1,11,14Zm3-3a1,1,0,1,1,1-1A1,1,0,0,1,14,11Zm3-3a1,1,0,1,1,1-1A1,1,0,0,1,17,8Zm1.947,7.762A11.416,11.416,0,0,1,14.429,24H11V22.078a34.925,34.925,0,0,0,6.379-4.629C17.93,16.9,18.447,16.334,18.947,15.762ZM6.551,6.568a34.925,34.925,0,0,0-4.629,6.379H0V9.518A11.416,11.416,0,0,1,8.238,5C7.666,5.5,7.1,6.017,6.551,6.568Z" />
                        </svg>
                        <h3>
                            Играть на сервере
                        </h3>
                    </button>
                </div>
            </div>
            <div className="text-sm mt-2 truncate">
                <div className="flex items-center justify-center -translate-y-[100%] overflow-hidden relative group-hover:duration-500 group-hover:translate-y-0">
                    <span className="hidden group-hover:block">
                        New text
                    </span>
                </div>
                <span className="group-hover:hidden animate-smooth_energy_1s">
                    {props.serverDescription}
                </span>
            </div>
        </div>
    )
}
