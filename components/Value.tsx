import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Value({}: Props) {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center my-20">
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white">The Smartest Way to Buy Livestock in Nigeria — Quality, Speed & Savings Guaranteed</h1> */}
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white">This Week’s Festive Offer — Buy Direct, Save Big, Celebrate Better!</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">Here’s what you get when you buy from Malyam Agro this week:</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-white">Healthy, Vet-Certified Livestock</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Strong, disease-free animals inspected and dewormed by licensed vets.
            No sick surprises. No extra vet bills.
          </a>
          {/* <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Health Checked by Licensed Veterinary Experts
          </a> */}
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Full Transparency You Can Trust
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Reliable Supply for Serious Buyers
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Healthy Livestock Made Accessible
          </a>
        </nav>
      </div>


      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-white">Direct Farm Pricing (No Middlemen)</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Save 25–40% instantly when you buy directly from us.
            Transparent, fair, and affordable — exactly what you pay for, nothing more.
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Top-Quality Livestock at True Farm Value
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>From Farm to You Without Delays
          </a>
          {/* <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Stable, Honest, and Predictable Pricing
          </a> */}
          {/* <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>The More You Buy, the More You Save
          </a> */}
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-white">Fast Nationwide Delivery</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>From Lagos to Kano, Abuja to Port Harcourt —
            we deliver quickly, safely, and right to your doorstep.
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Speed That Saves You Time
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Nationwide Coverage, Local Efficiency
          </a>
          {/* <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Stress-Free Animal Transport
          </a> */}
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Reliable Delivery Partners
          </a>
          {/* <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Flexible Delivery Options
          </a> */}
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-white">Flexible Order Sizes — Retail & Wholesale</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Whether it’s 1 cow for your family or 100 rams for resale,
            we’ve got you covered with equal care and professional service.
          </a>
          {/* <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Affordable for Retail Customers, Profitable for Wholesalers
          </a> */}
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>The More You Buy, the More You Save
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>No Hidden Charges, No Guesswork
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Healthy Livestock Within Your Budget
          </a>
          <a>
            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Buy With Ease, Pay Conveniently
          </a>
        </nav>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
  )
}

export default Value