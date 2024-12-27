"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuBurger, CiSearch } from 'react-icons/ci';
import { search as searchAPI } from '../api';
import Sidebar from './Sidebar'; 
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState({ products: [], categories: [], brands: [] });
  const [visibleProducts, setVisibleProducts] = useState(5); // State to control the number of visible products

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSearch = async () => {
    // try {
    //   const results = await searchAPI(search);
    //   setSearchResults(results);
    //   setVisibleProducts(5); // Reset the number of visible products when a new search is performed
    // } catch (err) {
    //   console.error('Error fetching search results:', err);
    // }
  };

  // const handleInputChange = (e) => {
  //   setSearch(e.target.value);
  //   if (e.target.value === '') {
  //     setSearchResults({ products: [], categories: [], brands: [] });
  //     setVisibleProducts(5); // Reset the number of visible products
  //   }
  // };

  // const loadMoreProducts = () => {
  //   setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 5);
  // };

  // const handleProductClick = (productId) => {
  //     router.push(`/productdetail/${productId}`);
  //     setSearch('');
  //     setSearchResults({ products: [], categories: [], brands: [] }); };

  // useEffect(() => {
  //   if (search.length > 0) {
  //     handleSearch();
  //   }
  // }, [search]);

  return (
    <div className="flex flex-col justify-start">
      <div className="lg:px-24 px-4 py-[26px] text-[12px] relative">
        <div className="flex justify-between items-center">
          {/* left section */}
          <div className="flex gap-16">
            <div className="flex items-center gap-3">
              <CiMenuBurger className="text-[15px] cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
              <h1>MENU</h1>
            </div>
            <Link className="hidden sm:block" href="/about">ABOUT TSABINZ</Link>
          </div>

          {/* brand logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <Image src={"/images/logo.svg"} alt="logo" width={42} height={31} />
          </Link>

          {/* right section */}
          <div className="flex gap-16">
            <form className="md:flex gap-3 items-center w-20 hidden">
              <Image src={"/images/search.svg"} alt="search" width={15} height={15} className="w-[15px] h-[15px] cursor-pointer hidden sm:block" />
              <input
                className="w-auto hidden md:block focus:outline-none"
                value={search}
                // onChange={handleInputChange}
                placeholder="SEARCH"
              />
            </form>
            <div className="flex gap-6 md:gap-8 lg:gap-16">
              <Link href="/dashboard">
                <Image
                  src={"/images/person.svg"}
                  alt="person"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </Link>
              <Link href="/cart">
                <Image
                  src={"/images/cart.svg"}
                  alt="person"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </Link>
              <Link href="/wishlist">
                <Image
                  src={"/images/heart.svg"}
                  alt="person"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="flex md:hidden w-full px-4">
        <input
          className="p-2 w-full h-12"
          placeholder="Search"
          value={search}
          // onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="p-3 bg-black text-white rounded-tr-lg rounded-br-lg mb-4">
          <CiSearch width={15} height={15} className="w-6 h-6 text-xl text-white" />
        </button>
      </div>

      {search && (
        <div className="absolute w-full top-[135px] lg:right-[12%] md:right-[5%] md:top-16 bg-white p-4 md:w-[268px] shadow-lg z-10">
          <div className="flex flex-col gap-4">
            {searchResults.products.length > 0 && (
              <div>
                <h3>Products</h3>
                {searchResults.products.slice(0, visibleProducts).map((item) => (
                  <div key={item._id} onClick={() => handleProductClick(item._id)} className="flex w-full gap-3 items-center cursor-pointer mt-2">
                    <div className="w-16 h-20">
                      <Image
                        src={item.images[0].url}
                        alt={item.name}
                        width={80}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className=' text-wrap text-sm w-[80%]'>{item.name}</p>
                  </div>
                ))}
                {visibleProducts < searchResults.products.length && (
                  <button onClick={loadMoreProducts} className="mt-4 text-blue-500">
                    See More
                  </button>
                )}
              </div>
            )}
            {searchResults.products.length === 0 &&
              searchResults.categories.length === 0 &&
              searchResults.brands.length === 0 && (
                <div>No items found</div>
              )}
          </div>
        </div>
      )}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Navbar;
