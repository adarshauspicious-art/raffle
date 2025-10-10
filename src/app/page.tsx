"use client";
import React, { useState } from "react";

export default function Page() {
    return (
        <div className=" font-jakarta text-xl flex min-h-screen items-center flex-col gap-4 justify-center bg-pink-100 bg-[url('/background_image.svg')]">
            <img src="/faffel_img.svg" width={300} height={300} alt="raffle_image" />

            <div className="text-black bg-white rounded-3xl mt-4 w-140 h-120 shadow-[15px_20px_0px_5px_rgba(255,10,10,10)] ">
                <h2 className=" flex justify-center mt-5 text-bold text-3xl font-bold">
                    Shipping Address
                </h2>
                <div className="text-black mt-2 bg-pink-100 w-65 h-10 mx-auto flex justify-center place-items-center border-pink-100 rounded-3xl ">
                    <h3 className="text-red-600 text-bold text-sm font-bold">
                        FOR YOUR FUTURE WINNINGS!
                    </h3>
                </div>
                <form className="space-y-4 ">

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Country"
                            name="country"
                            className="w-60 rounded-3xl border border-gray-300 px-3 py-2 mt-5 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400  "
                        />
                        <img
                            src="arrow_down.png"
                            alt="arrow down"
                            className="absolute top-8 right-78"
                        />

                        <input
                            type="text"
                            placeholder="State"
                            className="w-60 rounded-3xl border border-gray-300 px-3 py-2 mt-5 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img
                            src="arrow_down.png"
                            alt="down_arrow"
                            className="absolute top-8 left-122"
                        />

                        <input
                            type="text"
                            placeholder="Street Address"
                            className="w-124 border rounded-3xl border-gray-300 px-8 py-2 mt-4 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img
                            src="location.png"
                            alt="location"
                            className="absolute top-24 left-8 "
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="border rounded-3xl border-gray-300 px-8 py-2 mt-4 ml-5 w-60 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img
                            src="location.png"
                            alt="location"
                            className="absolute top-40 left-8"
                        />
                        <input
                            type="text"
                            placeholder="Postal Code"
                            className="border border-gray-300 px-9 py-2 rounded-3xl w-60 ml-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img
                            src="postal_icon.png"
                            alt="Postal_code"
                            className="absolute top-39 right-62"
                        />
                        <input
                            type="text"
                            placeholder="(456)726-0592"
                            className="border rounded-3xl border-gray-300 mt-4 ml-5 w-125 py-2 px-25 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <img
                            src="Flag.png"
                            alt="Flag"
                            className="absolute top-56 left-9"
                        />
                        <img
                            src="arrow_down.png"
                            alt="Arrow down"
                            className="absolute top-55 left-17"
                        />
                        <input type="text"
                            placeholder="Submit"
                            className="border border-gray-300 mt-4 ml-5 rounded-3xl py-2 text-center w-125 bg-red focus:outline-none focus:ring-2 focus:ring-black-400  bg-red-600 text-2xl"
                        />
                        <img
                            src="side_arrow.png"
                            alt="right arrow"
                            className=" absolute top-72 right-55"

                        />
                    </div>
                </form>
            </div >
        </div >
    );
}
