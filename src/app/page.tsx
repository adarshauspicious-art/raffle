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
                        <option value="UnderTaker">UnderTaker</option>
                        <option value="John">John</option>
                        <option value="Joker">Joker</option>
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

                    <button className="m-2 w-139 h-13 text-black border border-black-400  rounded-4xl absolute left-175 top-105 hover:bg-red-100 transition" onClick={() => console.log('Add to Cart clicked!')}>Add To Cart</button>
                </div>

                <button className="w-155 h-12 p-2  text-black rounded-4xl top-125 bg-[#F50927] border border-none  absolute left-160 hover:bg-red-700 transition" onClick={() => console.log("Button Clicked 'Enter Now'")}>Enter Now</button>

            </section>

            <section className="mt-20 mb-10 relative">
                <div className="flex justify-between mt-5 mr-30">

                    <img src="/product_page/Active Raffles.png" alt="" className="px-13" />

                    <button className="bg-[#F50927] border border-none rounded-4xl w-55 h-10 text-black hover:bg-red-700 transition" onClick={() => console.log("buton clicked ' View all live Raffles'")}>View All Live Raffles
                    </button>

                </div>


                <div className="flex flex-row justify-evenly gap-6 flex-wrap mt-10 ">
                    {/*  div of Active Raffles */}
                    <div className="w-70 h-84 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        {/*  Progress bar */}
                        <div className="w-40 h-1 bg-gray-300 mt-3 ml-5 rounded-2xl text-sm ">
                            <div className="w-25 h-1 bg-red-600 rounded-2xl "><p className="text-red-500 ml-50 text-sm mt-0">60/100</p></div>
                        </div>
                        <p className="text-bold text-red-600 ml-5 mt-2 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>

                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black hover:bg-red-700 transition" onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>

                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-68 right-4 flex justify-center items-center hover:bg-red-700 transition " >

                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log("Added to wishlist") }} />
                        </div>

                    </div>
                    {/*  div of Active Raffles */}

                   <div className="w-70 h-84 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        {/*  Progress bar */}
                        <div className="w-40 h-1 bg-gray-300 mt-3 ml-5 rounded-2xl text-sm ">
                            <div className="w-25 h-1 bg-red-600 rounded-2xl "><p className="text-red-500 ml-50 text-sm mt-0">60/100</p></div>
                        </div>
                        <p className="text-bold text-red-600 ml-5 mt-2 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>

                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black hover:bg-red-700 transition" onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>

                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-68 right-4 flex justify-center items-center hover:bg-red-700 transition " >

                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log("Added to wishlist") }} />
                        </div>

                    </div>
                    {/*  div of Active Raffles */}
                    <div className="w-70 h-84 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        {/*  Progress bar */}
                        <div className="w-40 h-1 bg-gray-300 mt-3 ml-5 rounded-2xl text-sm ">
                            <div className="w-25 h-1 bg-red-600 rounded-2xl "><p className="text-red-500 ml-50 text-sm mt-0">60/100</p></div>
                        </div>
                        <p className="text-bold text-red-600 ml-5 mt-2 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>

                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black hover:bg-red-700 transition" onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>

                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-68 right-4 flex justify-center items-center hover:bg-red-700 transition " >

                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log("Added to wishlist") }} />
                        </div>

                    </div>
                    {/*  div of Active Raffles */}
                     <div className="w-70 h-84 bg-white shadow ml-20 border rounded-2xl mt-5 relative">
                        <img src="product_page/Product Frame .png" alt="" className="p-4 border rounded-2xl" />
                        {/*  Progress bar */}
                        <div className="w-40 h-1 bg-gray-300 mt-3 ml-5 rounded-2xl text-sm ">
                            <div className="w-25 h-1 bg-red-600 rounded-2xl "><p className="text-red-500 ml-50 text-sm mt-0">60/100</p></div>
                        </div>
                        <p className="text-bold text-red-600 ml-5 mt-2 text-lg"><b>Name Of The Raffle </b>
                        </p>
                        <p className="text-black px-5">$ 1.00 <span className="text-sm text-[#4E4E4E]"> Only</span>
                        </p>

                        <button className="bg-[#F50927] w-45 ml-4 border border-none rounded-3xl h-9 text-black hover:bg-red-700 transition" onClick={() => console.log("Button was clicked")}>Enter Now
                        </button>

                        <div className="bg-[#F50927] w-12 h-9 rounded-2xl absolute top-68 right-4 flex justify-center items-center hover:bg-red-700 transition " >

                            <img src="/product_page/wishlist.png" alt="" className=" p-2 m-1 border:none  rounded-2xl " onClick={() => { console.log("Added to wishlist") }} />
                        </div>

                    </div>
                   
                </div>
            </section>


            {/*  what people say   */}

            <section className="mt-25 mb-10 relative">

                <img src="/product_page/What People Say.png" alt="" className="mx-auto block" />

                <div className="flex flex-row justify-space-between gap-6 overflow-x-auto mt-10">

                    {/*  div of reviews  */}
                    <div className="w-110 h-78 bg-white shadow border rounded-2xl  mt-10 ml-20 p-8  flex flex-row flex-wrap mb-10  ">
                        <img src="/product_page/Quotes.png" alt="Quotes_img" />

                        <p className="text-[#464646] mt-10   ">I bought tickets on this raffle site and was really impressed with how easy it was to select and pay. They showed the number of tickets remaining, the countdown to the draw.</p>

                        <div className="w-95 h-[0.5] bg-gray-300 mt-5 "></div>

                        <div className="w-13 h-13 bg-red-600 flex flex justify-center items-center  rounded rounded-full mt-4 text-xl">KM</div>

                        <div className="flex flex-col">
                            <p className="text-xl text-black font-bold mt-7 ml-5 ">KYLE MERWIN</p>

                            <div className="w-36 mt-1 ml-5  h-[0.5] bg-gray-300  "></div>
                            <p className="text-sm text-[#4E4E4E] ml-5 mt-1">Co-owner</p>
                        </div>

                    </div>

                    {/*  div of reviews  */}
                    <div className="w-110 h-78 bg-white shadow border rounded-2xl  mt-10 ml-20 p-8 flex flex-row flex-wrap mb-10 ">
                        <img src="/product_page/Quotes.png" alt="Quotes_img" />

                        <p className="text-[#464646] mt-10   ">Good concept : You can buy tickets, the prizes (laptop, gadgets) look attractive. But I did feel some friction — the site asked me to register before buying</p>

                        <div className="w-95 h-[0.5] bg-gray-300 mt-5 "></div>

                        <div className="w-13 h-13 bg-red-600 flex flex justify-center items-center  rounded rounded-full mt-4 text-xl">MG</div>

                        <div className="flex flex-col">
                            <p className="text-xl text-black font-bold mt-7 ml-5 ">MATRIN GARIXX</p>

                            <div className="w-36 mt-1 ml-5  h-[0.5] bg-gray-300  "></div>
                            <p className="text-sm text-[#4E4E4E] ml-5 mt-1">Co-owner</p>
                        </div>

                    </div>
                    {/*  div of reviews  */}
                    <div className="w-110 h-78 bg-white shadow border rounded-2xl  mt-10 ml-20 p-8 flex flex-row flex-wrap mb-10 ">
                        <img src="/product_page/Quotes.png" alt="Quotes_img" />

                        <p className="text-[#464646] mt-10   ">Great raffle site! Buying tickets was super easy, and the prizes look genuine. Excited to try my luck again soon</p>

                        <div className="w-95 h-[0.5] bg-gray-300 mt-5 "></div>

                        <div className="w-13 h-13 bg-red-600 flex flex justify-center items-center  rounded rounded-full mt-4 text-xl">DG</div>

                        <div className="flex flex-col">
                            <p className="text-xl text-black font-bold mt-7 ml-5 ">DAVID GUTTA</p>

                            <div className="w-36 mt-1 ml-5  h-[0.5] bg-gray-300  "></div>
                            <p className="text-sm text-[#4E4E4E] ml-5 mt-1">Co-owner</p>
                        </div>

                    </div>

                    {/*  div of reviews  */}
                    <div className="w-110 h-78 bg-white shadow border rounded-2xl  mt-10 ml-20 p-8 flex flex-row flex-wrap mb-10 ">
                        <img src="/product_page/Quotes.png" alt="Quotes_img" />

                        <p className="text-[#464646] mt-10   ">Nice platform for tech lovers. I joined a raffle for a laptop; smooth process and quick confirmation email.</p>

                        <div className="w-95 h-[0.5] bg-gray-300 mt-5 "></div>

                        <div className="w-13 h-13 bg-red-600 flex flex justify-center items-center  rounded rounded-full mt-4 text-xl">HW</div>

                        <div className="flex flex-col">
                            <p className="text-xl text-black font-bold mt-7 ml-5 ">HARD WELL</p>

                            <div className="w-36 mt-1 ml-5  h-[0.5] bg-gray-300  "></div>
                            <p className="text-sm text-[#4E4E4E] ml-5 mt-1">Co-owner</p>
                        </div>

                    </div>

                    {/*  div of reviews  */}
                    <div className="w-110 h-78 bg-white shadow border rounded-2xl  mt-10 ml-20 p-8 flex flex-row flex-wrap mb-10 ">
                        <img src="/product_page/Quotes.png" alt="Quotes_img" />

                        <p className="text-[#464646] mt-10   ">We Been using this raffle site for months. Easy to navigate, frequent draws, and exciting gadget prizes.</p>

                        <div className="w-95 h-[0.5] bg-gray-300 mt-5 "></div>

                        <div className="w-13 h-13 bg-red-600 flex flex justify-center items-center  rounded rounded-full mt-4 text-xl">KS</div>

                        <div className="flex flex-col">
                            <p className="text-xl text-black font-bold mt-7 ml-5 ">KSHMR</p>

                            <div className="w-36 mt-1 ml-5  h-[0.5] bg-gray-300  "></div>
                            <p className="text-sm text-[#4E4E4E] ml-5 mt-1">Co-owner</p>
                        </div>

                    </div>

                    {/*  div of reviews  */}
                    <div className="w-110 h-78 bg-white shadow border rounded-2xl  mt-10 ml-20 p-8 flex flex-row flex-wrap mb-10 ">
                        <img src="/product_page/Quotes.png" alt="Quotes_img" />

                        <p className="text-[#464646] mt-10   ">I’ve been entering these raffles regularly for several months. The site gives me occasional bonuses and email alerts when new gadget raffles appear.</p>

                        <div className="w-95 h-[0.5] bg-gray-300 mt-5 "></div>

                        <div className="w-13 h-13 bg-red-600 flex flex justify-center items-center  rounded rounded-full mt-4 text-xl">HP</div>

                        <div className="flex flex-col">
                            <p className="text-xl text-black font-bold mt-7 ml-5 ">HARRY POTTER</p>

                            <div className="w-36 mt-1 ml-5  h-[0.5] bg-gray-300  "></div>
                            <p className="text-sm text-[#4E4E4E] ml-5 mt-1">Co-owner</p>
                        </div>

                    </div>

                </div>

            </section>
            <footer className="relative w-full mt-10 bg-cover  bg-[url('/footer.svg')] text-white px-10 py-12">
                <img src="faffel_img.svg" alt="raffle logo" width={100} height={100} className="mx-auto block mt-10" />
                <p className="text-center mb-8 mt-20">
                    Win amazing prizes with fair draws, secure payments, and trusted raffles—all in one place.
                </p>

                <div className="flex justify-evenly gap-8 mb-6">
                    <a href="#" className="text-center no-underline hover:underline">Home</a>
                    <a href="#" className="text-center no-underline hover:underline">Raffles</a>
                    <a href="#" className="text-center no-underline hover:underline">Completed</a>
                    <a href="#" className="text-center no-underline hover:underline">Redeem Points</a>
                    <a href="#" className="text-center no-underline hover:underline">About</a>
                </div>

                <hr className="border-t border-gray-300 my-6 w-3/4 mx-auto" />

                <div className="flex justify-center gap-90 text-sm">
                    <a href="#" className="flex items-center gap-2">
                        <img src="/fb_logo.png" alt="Facebook logo" className="w-5 h-5" /> Facebook
                    </a>
                    <a href="#" className="flex items-center gap-2">
                        <img src="/isnta_logo.png" alt="Instagram logo" className="w-5 h-5" /> Instagram
                    </a>
                    <a href="#" className="flex items-center gap-2">
                        <img src="/twitter_logo.png" alt="Twitter logo" className="w-5 h-5" /> Twitter
                    </a>
                    <a href="#" className="flex items-center gap-2">
                        <img src="/Pinterset_logo.png" alt="Pinterest logo" className="w-5 h-5" /> Pinterest
                    </a>
                </div>

                <p className="text-xs text-gray-300 mt-8 text-center">
                    © 2024 RaffleHut Company. All rights reserved.
                </p>
            </footer>

        </div>
    );
}
