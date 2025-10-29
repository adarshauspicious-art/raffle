"use client";
import React, { useState, useEffect } from "react";


export default function Page() {



    return (

        <div className="w-full  bg-[#FFE8E8] bg-[url('/background_image.svg')] relative">
            <section className="w-full flex flex-col ">
                <div className="text-white bg-black text-bold mt-1 ml-2 mr-2 py-3 text-center border rounded-xl"> Use promo code <span className="font-semibold">WIN10</span> for <span className="font-semibold">10% </span>off.</div>


                <div className="flex justify-between mt-5 ml-30 mr-30">
                    <img src="/faffel_img.svg" alt="logo" width={100} height={100} />
                    <select className="text-xl text-black border-gray rounded-3xl   bg-white py-2 px-4  focus:outline-none focus:border-gray-300" onChange={(e) => {
                        const selectedValue = e.target.value;


                        if (selectedValue === "Logout") {
                            console.log("User chose to logout!");
                        } else {
                            console.log(`User selected: ${selectedValue}`);
                        }
                    }}
                    >
                        <option value="Logout">Logout</option>
                        <option value="Roman">Roman</option>
                        <option value="Remisterio">Remisterio</option>
                        <option value="UnderTaker">UnderTakre</option>
                        <option value="John">John</option>
                        <option value="Triple H">Triple H</option>
                    </select>
                </div>
            </section>

            <section className="relative mt-20 ml-25 ">

                <img src="/product_page/product_page1.png" alt="" />
                 <div className="mt-3">
                    <img src="/product_page/imgs.png" alt="" />
                </div>

                <div className="w-35 h-10  rounded-3xl flex  justify-center items-center  bg-white top-3 border  border-white absolute left-160">

                    <img src="/product_page/cronometer.png" alt="cronometro" />

                    <p className="text-[#F50927] p-2">24:56:00 left</p>

                </div>


                <div className="absolute top-12 left-155 text-black ">

                    <img src="/product_page/Name of Raffle.png" alt="Name of the raffle " className=" " />

                    <p className="absolute top-16 left-5">We believe winning should be exciting, not complicated. That’s why we’ve kept things simple — pick a raffle you love, enter with just a few clicks, and leave the rest to fair, transparent draws. Even if you don’t win, you’ll earn points that bring you closer to guaranteed rewards.</p>

                </div>


                <div className="w-75 h-15 rounded flex flex-col p-2 bg-white top-70 text-black border rounded-xl border-white absolute left-160  ">

                    <p className="text-[#4E4E4E]">Number of Slots</p>
                    <p className="text-sm"><b>20</b>/300 Slots left</p>

                </div>


                <div className="w-75 h-15 rounded flex flex-col p-2 bg-white top-70 text-black border rounded-xl border-white absolute left-240  ">
                    <p className="text-[#4E4E4E]">Ends on </p>
                    <p className="text-sm"><b className="text-bold">25 </b>September</p>

                </div>

                <div className="bg-[#ffe09c] w-155 h-14 p-2  text-black  text-sm rounded-xl   top-90 border border-yellow-500  absolute left-160 ">

                    <p className="text-[#4E4E4E] font-['Plus_Jakarta_Sans'] italic">Don't worry if you lose you will still get points </p>
                    <p className="text-black font-none ">2500 Points</p>

                </div>

                <div>
                    <p className="text-[#F50927] absolute left-160 top-110 text-lg"><b>$1.00</b></p>

                    <button className="m-2 w-139 h-13 text-black border border-black-400  rounded-4xl absolute left-175 top-105" onClick={() => console.log('Add to Cart clicked!')}>Add To Cart</button>
                </div>

                <button className="w-155 h-12 p-2  text-black rounded-4xl top-125 bg-[#F50927] border border-none  absolute left-160" onClick={() => console.log("Button Clicked 'Enter Now'")}>Enter Now</button>

               



            </section>

            <section className="mt-20 mb-10 relative">
                <div className="flex justify-between mt-5 mr-30">

                    <img src="/product_page/Active Raffles.png" alt="" className="px-13" />

                    <button className="bg-[#F50927] border border-none rounded-4xl w-55 h-10 text-black" onClick={() => console.log("buton clicked ' View all live Raffles'")}>View All Live Raffles
                    </button>

                </div>


                <div className="flex flex-row justify-space-between gap-6 flex-wrap mt-10">
                    {/*  div of Active Raffles */}
                    <div className="w-70 h-82 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />

                        <p className="text-bold text-red-600 ml-5 mt-5 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>

                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black " onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>

                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-67 right-4 flex justify-center items-center" >

                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log() }} />
                        </div>

                    </div>
                    {/*  div of Active Raffles */}

                    <div className="w-70 h-82 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        <p className="text-bold text-red-600 ml-5 mt-5 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>
                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black " onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>
                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-67 right-4 flex justify-center items-center" >
                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log() }} />
                        </div>


                    </div>
                    {/*  div of Active Raffles */}
                    <div className="w-70 h-82 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        <p className="text-bold text-red-600 ml-5 mt-5 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>
                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black " onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>
                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-67 right-4 flex justify-center items-center" >
                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log() }} />
                        </div>


                    </div>
                    {/*  div of Active Raffles */}
                    <div className="w-70 h-82 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        <p className="text-bold text-red-600 ml-5 mt-5 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>
                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black " onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>
                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-67 right-4 flex justify-center items-center" >
                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log() }} />
                        </div>

                        


                    </div>
                    <div className="w-70 h-82 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />

                        <p className="text-bold text-red-600 ml-5 mt-5 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>

                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black " onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>

                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-67 right-4 flex justify-center items-center" >

                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log() }} />
                        </div>

                    </div>

                </div>


            </section>

            <section className="">
                <img src="/product_page/What People Say.png" alt="" className="flex justify-center items-center"/>
            </section>

        </div>
    );
}
