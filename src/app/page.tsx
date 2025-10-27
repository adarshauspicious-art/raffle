"use client";
import React, { useState, useEffect } from "react";


export default function Page() {



    return (

        <div className="w-full  bg-pink-50 bg-[url('/background_image.svg')] relative">
            <section className="flex flex-col ">
                <div className="text-white bg-black text-bold mt-1 ml-2 mr-2 py-3 text-center border rounded-xl"> Use promo code <span className="font-semibold">WIN10</span> for <span className="font-semibold">10% </span>off.</div>


                <div className="flex justify-between mt-5 ml-30 mr-30">
                    <img src="/faffel_img.svg" alt="logo" width={100} height={100} />
                    <select className="text-xl text-black border-gray rounded-3xl   bg-white py-2 px-4  focus:outline-none focus:border-gray-300">
                        <option value="Lucas">Lucas</option>
                        <option value="Logout">Logout</option>
                    </select>
                </div>
            </section>

            <section className="flex flex-col items-center text-center justify-center relative">
                <div className=" text-center justify-center relative ">
                    <img src="/text.png" alt="text" className="mx-auto mb-15 mt-20" />
                    <img src="/sideText.png" alt="side text" className=" ml-25 absolute left-165 top-63 translate-y-[-50%] mt- -4 ml-25  " />
                    <p className="text-black text-center">Join thrilling raffles for gift cards, gadgets, and more — starting at just $1.</p>
                    <p className="text-black text-center"> Even if you don’t win, you earn points toward guaranteed rewards.</p>
                </div>
                <button className="bg-red-600 mt-10 text-black w-35 py-2 border rounded-3xl border-red-300   ">
                    Browse Raffle
                </button>
            </section>

            <section className="flex flex-col ">
                <div className="text-center justify-center">
                    <img src="/text1.png" alt="" />
                    <p className="text-black">We believe winning should be exciting, not complicated. That’s why we’ve kept things simple — pick a raffle you love, enter with just a few clicks, and leave the rest to fair, transparent draws. Even if you don’t win, you’ll earn points that bring you closer to guaranteed rewards.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 px-8 text-black py-10 rounded-3xl m-10 bg-pink-50">
                    <div className="shadow bg-white p-6 rounded-2xl hover:bg-pink-100 ">
                        <img src="ticket.png" alt="ticket logo" />
                        <h4 className="text-xl font-semibold mb-2 text-red-600 ">Choose Your Raffle</h4>
                        <p className="text-black">Select from exciting gift cards, cool merchandise, and more! Get started with entries as low as $1.</p>
                    </div>

                    <div className="bg-white hover:bg-pink-100 p-6 rounded-2xl shadow">
                        <img src="wait.png" alt="" />
                        <h4 className="text-xl font-semibold mb-2 text-red-600 ">Wait for the Draw</h4>
                        <p className="text-black">Wait for exciting prizes like gift cards and gadgets. You won’t want to miss your chance to win.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:bg-pink-100">
                        <img src="reward.png" alt="" />
                        <h4 className="text-xl font-semibold mb-2 text-red-600">Get Rewarded</h4>
                        <p className="text-black">Choose from a variety of gift cards, cool gadgets, and much more.</p>
                    </div>
                </div>
            </section>

            <footer className=" bg-[url('/footer.svg')] relative mt-10 py-10 px-10">

                <p className="text-center mt-50 ">Win amazing prizes with fair draws, secure payments, and trusted raffles—all in one place.</p>

                <div className=" flex justify-center gap-30 mb-6">
                    <a href="#" className="text-center mt-5 no-underline hover:underline">Home</a>
                    <a href="#" className="text-center mt-5 no-underline hover:underline">Raffles</a>
                    <a href="#" className="text-center mt-5 no-underline hover:underline">Completed</a>
                    <a href="#" className="text-center mt-5 no-underline hover:underline">Reedeems Points</a>
                    <a href="#" className="text-center mt-5 no-underline hover:underline">About</a>
                </div>

                <div className="flex justify-around gap-6 text-sm">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Pinterest</a>
                </div>

                <p className="text-xs text-gray-300 mt-8 text-center">
                    © 2024 RaffleHut Company. All rights reserved.
                </p> 
            </footer>
        </div>
    );
}