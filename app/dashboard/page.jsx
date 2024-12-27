"use client"
import Image from "next/image";
import React, { useState } from "react";
import RecentlyViewed from "../components/RecentlyViewed";
import DashboardSidebar from "../components/DashboardSidebar";
import Recommendation from "../components/Recommendation";
import DashboardContent from "../components/DashboardContent";
import DashboardOrders from "../components/DashboardOrders";
import DashboardInfo from "../components/DashboardInfo";
import DashboardReturns from "../components/DashboardReturns";
import DashboardCancellations from "../components/DashboardCancellations";
import DashboardHelpCenter from "../components/DashboardHelpCenter";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  }

  return (
    <>
      <div className="relative flex flex-col lg:flex-row lg:my-[44px] my-3 lg:mx-[95px] mx-4 gap-[72px]">
        {/* Hamburger Button */}
        <button
          className="p-2 rounded-md lg:hidden " 
          style={{ backgroundColor: "#EDEDED" }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 6.75A.75.75 0 015.25 6h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[340px] p-4 pt-24 md:pt-0 md:p-0 bg-white lg:bg-inherit z-20 transform transition-transform duration-1000 lg:relative lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <DashboardSidebar
            onClick={handleSectionClick}
            activeSection={activeSection}
          />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}


        {/* right */}
        {activeSection === "dashboard" && <DashboardContent />}
        {activeSection === "orders" && <DashboardOrders />}
        {activeSection === "info" && <DashboardInfo />}
        {activeSection === "returns" && <DashboardReturns />}
        {activeSection === "cancellations" && <DashboardCancellations />}
        {activeSection === "help" && <DashboardHelpCenter />}
        
      </div> 
      <Recommendation />
      
      
    </>
  );
};

export default Dashboard;
