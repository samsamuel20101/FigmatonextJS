"use client";

import React, { createContext, useContext, useState } from "react";

export interface cartStateType {
  key: string,
  orderId: string,
  customer: string,
  image: string,
  productName: string,
  quantity: number,
  singlePrice: number,
}

const InitialCart = [
  {
    key: '1',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '2',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '3',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '4',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '5',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '6',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '7',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '8',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '9',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  },
  {
    key: '10',
    orderId: '#110234',
    customer: 'Mykola Semen',
    image: 'camera',
    productName: 'Polaroid Now Instant Camera',
    quantity: 2,
    singlePrice: 129.99,
  }
] as cartStateType[]

const useCartState = () =>
  useState(InitialCart);

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null >(null);


const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, setCartState] = useCartState();

  return (
    <CartContext.Provider value={[cartState, setCartState]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;