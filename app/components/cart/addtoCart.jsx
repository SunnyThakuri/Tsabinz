"use client";
import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddToCart = ({ product,quantity,size,color }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.pid === product._id);

    if (existingItem) {
      existingItem.quantity = quantity;//only 1 increment if producyt xisits for now
      existingItem.size = size;
      existingItem.color = color;
    } else {
      cart.push({
        pid: product._id,
        quantity: quantity,
        color: color,
        size: size,
        image: product.images[0].url,
        name: product.name,
        price: product.price,
        priceSale: product.priceSale
      });
    }
    toast.success("Product Added successfully");
    localStorage.setItem('cart', JSON.stringify(cart));
    

  };

  return (
    <button className=" w-full shop-btn-dark text-center cursor-pointer mb-3" onClick={handleAddToCart}>
      Add to Bag
    </button>
  );
};

export default AddToCart;
