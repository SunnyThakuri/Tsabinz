import Image from 'next/image'
import React from 'react'
import RecentlyViewed from './RecentlyViewed'


const orders = [
  {
    title: "Product 1",
    image: "/images/order-1.jpg",
    placedOn: "2024-11-21",
    orderId: "#12345",
    total: "$150.00",
  },
  {
    title: "Product 2",
    image: "/images/order-2.jpg",
    placedOn: "2024-11-21",
    orderId: "#12346",
    total: "$200.00",
  },
];


const DashboardContent = () => {
  return (
    <div className="w-full max-w-[930px] lg:w-[930px] px-4 md:px-0">
        <h1 className="text-[22px]">Hi, Linza</h1>
        <p className="mt-[48px] mb-[24px]">Recent Orders</p>

        <div>
        <div className="max-w-4xl text-[14px]">
          {/* Table Header */}
          <div className="hidden md:flex p-4 text-center " style={{ backgroundColor: "#EDEDED" }}>
            <div className="flex-1">Items</div>
            <div className="flex-1">Placed On</div>
            <div className="flex-1">Order ID</div>
            <div className="flex-1">Total</div>
          </div>

          {/* Mobile View Cards */}
            <div className="md:hidden grid grid-cols-1 gap-6">
            {orders.map((order, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md" >
                <div className="w-[100px] h-[150px] bg-gray-300 overflow-hidden flex-shrink-0 relative">
                <Image
                        src={order.image}
                        alt={order.title}
                        layout="fill"
                        className="object-cover"
                      />
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-gray-700 text-sm font-bold">Placed On:</p>
                  <p className="text-gray-700 text-sm">{order.placedOn}</p>
                  <p className="text-gray-700 text-sm font-bold mt-2">Order ID:</p>
                  <p className="text-gray-700 text-sm">{order.orderId}</p>
                  <p className="text-gray-700 text-sm font-bold mt-2">Total:</p>
                  <p className="text-gray-700 text-sm">{order.total}</p>
                  

                </div>

              </div>
            ))}
            </div>



          {/* Table Rows */}
          <div className="hidden md:flex flex-col">
            {orders.map((order, index) => (
              <div key={index}>
                <div
                  className="flex items-center p-4 bg-white text-center"
                >
                  {/* Title Column */}
                  <div className="flex-1">
                    <div className="flex justify-center items-center space-x-4">
                      <div className="w-[100px] h-[150px] bg-gray-300 overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={order.image}
                          alt={order.title}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Placed On Column */}
                  <div className="flex-1 text-gray-700">{order.placedOn}</div>
                  {/* Order ID Column */}
                  <div className="flex-1 text-gray-700">{order.orderId}</div>
                  {/* Total Column */}
                  {/* <div className="flex-1 text-gray-700">{order.total}</div> */}
                  <div className='flex-1 text-gray-700'>{order.total}</div>
                
                </div>
                <hr className="h-px mx-1 bg-gray-200 border-0 "></hr>{/*horizontal line */}
                </div>
            ))}
          </div>
        </div>
      </div>
        <RecentlyViewed />
      </div>
  )
}

export default DashboardContent