import Image from 'next/image'
import React from 'react'

const DashboardSidebar = ({onClick,activeSection}) => {
  const sections = [
    { name: "dashboard", label: "Dashboard", icon: "/images/dashboard.svg" },
    { name: "orders", label: "My Orders", icon: "/images/orders.svg" },
    { name: "info", label: "My Info", icon: "/images/info.svg" },
    { name: "returns", label: "My Returns", icon: "/images/return.svg" },
    { name: "cancellations", label: "My Cancellations", icon: "/images/cancellations.svg" },
    { name: "help", label: "Help Center", icon: "/images/help.svg" },
    // { name: "signout", label: "Sign Out", icon: "/images/sign-out.svg" },
  ];
  return (
    // <div className="flex flex-col gap-3">
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] cursor-pointer" style={{ backgroundColor: "#F1F1F1" }} onClick={()=>onClick("dashboard")}>
    //       <div>
    //         <Image
    //           src="/images/dashboard.svg"
    //           alt="logo"
    //           width={24}
    //           height={24}
    //         />
    //       </div>
    //       <h1>Dashboard</h1>
    //     </div>
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] cursor-pointer" onClick={()=>onClick("orders")}>
    //       <div>
    //         <Image src="/images/orders.svg" alt="logo" width={24} height={24} />
    //       </div>
    //       <h1>My Orders</h1>
    //     </div>
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] cursor-pointer" onClick={()=>onClick("info")}>
    //       <div>
    //         <Image src="/images/info.svg" alt="logo" width={24} height={24} />
    //       </div>
    //       <h1>My Info</h1>
    //     </div>
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] cursor-pointer" onClick={()=>onClick("returns")}>
    //       <div>
    //         <Image src="/images/return.svg" alt="logo" width={24} height={24} />
    //       </div>
    //       <h1>My Returns</h1>
    //     </div>
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] cursor-pointer" onClick={()=>onClick("cancellations")}>
    //       <div>
    //         <Image
    //           src="/images/cancellations.svg"
    //           alt="logo"
    //           width={24}
    //           height={24}
    //         />
    //       </div>
    //       <h1>My Cancellations</h1>
    //     </div>
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] cursor-pointer" onClick={()=>onClick("help")}>
    //       <div>
    //         <Image src="/images/help.svg" alt="logo" width={24} height={24} />
    //       </div>
    //       <h1>Help Center</h1>
    //     </div>
    //     <div className="flex items-center gap-3 py-[14px] px-[24px] mt-[84px] cursor-pointer" onClick={()=>onClick("signout")}>
    //       <div>
    //         <Image
    //           src="/images/sign-out.svg"
    //           alt="logo"
    //           width={24}
    //           height={24}
    //         />
    //       </div>
    //       <h1>Sign Out</h1>
    //     </div>
    //   </div>
    <div className='flex flex-col gap-10   lg:gap-32 p-4'>
      <div className="flex flex-col gap-10 md:gap-2">
        {sections.map(({ name, label, icon }) => (
          <div
            key={name}
            className={`flex items-center gap-3 md:py-[14px] md:px-[24px] cursor-pointer ${activeSection === name ? 'bg-gray-200' : ''}`}
            onClick={() => onClick(name)}
          >
            <div  className="w-6 h-6">
              <Image src={icon} alt={label} width={24} height={24} color='#9ca3af' className="w-full h-full text-gray-400"  />
            </div>
            <h1 className='md:text-lg font-medium text-xl text-gray-400 md:text-black '>{label}</h1>
          </div>
        ))}
      </div>
      <div 
        className={`flex items-center gap-3 md:py-[14px] md:px-[24px] cursor-pointer ${activeSection === "signout" ? 'bg-gray-200' : ''}`}
        onClick={() => onClick("signout")}
          >
            <div>
              <Image src="/images/sign-out.svg" alt='signout' width={24} height={24} />
            </div>
            <h1 className='md:text-lg font-medium text-xl text-gray-400 md:text-black'>Sign Out</h1>
      </div>
    </div>
  )
}

export default DashboardSidebar