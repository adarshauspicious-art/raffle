"use client";
import React, { useState, useEffect } from "react";


export default function Page() {



    return (

        <div className="w-full  bg-pink-100 bg-[url('/background_image.svg')] relative">
            <section className="w-full flex flex-col ">
                <div className="text-white bg-black text-bold mt-1 ml-2 mr-2 py-3 text-center border rounded-xl"> Use promo code <span className="font-semibold">WIN10</span> for <span className="font-semibold">10% </span>off.</div>


                <div className="flex justify-between mt-5 ml-30 mr-30">
                    <img src="/faffel_img.svg" alt="logo" width={100} height={100} />
                    <select className="text-xl text-black border-gray rounded-3xl   bg-white py-2 px-4  focus:outline-none focus:border-gray-300">
                        <option value="Lucas">Lucas</option>
                        <option value="Logout">Logout</option>
                    </select>
                </div>
            </section>

            <section className=" relative mt-10 ml-20 ">
                <img src="/product_page/product_page1.png" alt="" />
                <div className="w-35 h-10 rounded-3xl flex  justify-center items-center  bg-white top-3 border  border-white absolute left-160">
                    <img src="/product_page/cronometer.png" alt="cronometro" />
                    <p className="text-red-400">24:56:00 left</p>
                </div>
                <div className="absolute top-12 left-155 text-black ">
                    <img src="/product_page/Name of Raffle.png" alt="Name of the raffle " className=" " />
                    <p className="absolute top-16 left-5">We believe winning should be exciting, not complicated. That’s why we’ve kept things simple — pick a raffle you love, enter with just a few clicks, and leave the rest to fair, transparent draws. Even if you don’t win, you’ll earn points that bring you closer to guaranteed rewards.</p>
                </div>
                <div className="w-75 h-15 rounded flex flex-col p-2 bg-white top-70 text-black border rounded-xl border-white absolute left-160  ">
                    <p>Number of Slots</p>
                    <p><b>20</b>/300</p>
                    </div>
                <div className="w-75 h-15 rounded flex flex-col p-2 bg-white top-70 text-black border rounded-xl border-white absolute left-160  ">
                    <p>Ends on </p>
                    <p><b>25 </b>September</p>
                    </div>

            </section>

        </div>
    );
}