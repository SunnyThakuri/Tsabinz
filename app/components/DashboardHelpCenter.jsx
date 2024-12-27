"use client"
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";


const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, we can’t offer you a refund or exchange.",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and navigating to the 'My Orders' section.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary.",
    },
    {
      question: "Can I cancel my order after placing it?",
      answer: "You can cancel your order within 24 hours of placing it by contacting our customer support team. After this period, cancellations may not be possible.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and other secure online payment methods. All transactions are encrypted for your safety.",
    },
  ];
  
const DashboardHelpCenter = () => {
    
      const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full lg:w-[923px] mb-8 md:mb-0">
      <p className="mb-[24px] text-[22px]">FAQs</p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-md"
            style={{boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.1)"}}
          >
            {/* Question */}
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
            </div>

            {/* Answer (Collapsible) */}
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 rounded-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-[84px]">
        <h1 className="text-[22px]">Size Guide</h1>
        <div className="w-full  bg-zinc-600 mt-8">
          <Image src="/images/sizechart.png" alt="size chart" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}></Image>
        </div>
      </div>
      <div className="mt-[84px] flex flex-col gap-8" style={{color: "#575757"}}>
        <h1 className="text-[22px] text-black">Contact Us</h1>
        <p>Unable to Reach Us? Contact Us via Email or Phone</p>
        <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-3">
                <Image src="/images/telephone.svg" alt="line" width={28} height={28} />
                <p>XXX XXX XXX</p>
            </div>
            <div className="flex items-center gap-3">
                <Image src="/images/location.svg" alt="line" width={28} height={28} />
                <p>Texas, United States</p>
            </div>
            <div className="flex items-center gap-3">
                <Image src="/images/mail.svg" alt="line" width={28} height={28} />
                <p>tsabinzofficial@gmail.com</p>
            </div>

        </div>
      </div>
      <div className='flex gap-5 mt-8'>
                    <a className='h-5 w-5 cursor-pointer'>
                        <Image src="/images/facebook.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                    </a>
                    <a className='h-5 w-5 cursor-pointer'>
                        <Image src="/images/twitter.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                    </a>
                    <a className='h-5 w-5 cursor-pointer'>
                        <Image src="/images/instagram.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                    </a>
                    <a className='h-5 w-8 cursor-pointer'>
                        <Image src="/images/youtube.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                    </a>
                    <a className='h-5 w-8 cursor-pointer'>
                        <Image src="/images/github.svg" alt="instagram" width={24} height={20} className='w-full h-full'/>
                    </a>
                </div>
    </div>
  );
};

export default DashboardHelpCenter;
