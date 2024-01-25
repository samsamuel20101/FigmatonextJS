'use client'

import NetherlandsFlag from '@/public/Netherlands.svg'
import Image from 'next/image';
import MailIcon from '@/public/mail.svg'
import PhoneIcon from '@/public/phone.svg'
import { Divider } from '@nextui-org/divider';
import ProductImage from "@/public/product-image.png"
import { useContext } from 'react';
import { CartContext, cartStateType } from '@/app/cartProvider';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

const OrderCard = () => {
  const [cartState] = useContext<cartStateType[] | any>(CartContext)
  console.log(cartState)
  return (
    <div className="flex flex-col w-full h-auto font-medium">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 text-medium font-medium">
          <h1>Mykola Semen</h1>
          <h1>#110234</h1>
        </div>
        <div className="flex flex-row items-center justify-between text-sm font-normal text-foreground-500">
          <h1>Ordered on</h1>
          <h1>Mon, 24 Nov 2023</h1>
        </div>
        <div className="flex flex-row justify-between text-sm items-center">
          <div className="flex flex-col items-start">
            <h1>Shipped</h1>
            <h1 className='font-normal'>Not Yet</h1>
          </div>
          <div className="flex flex-col items-start">
            <h1>Tracking Number</h1>
            <h1>Career, YWY7TL79XDCN</h1>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h1>Delivery Address</h1>
          <div className='whitespace-pre-wrap w-9/12'>7662 Hegmann Wall Apt.124 Pollichchester, IA 13008-3640, New Mac United State</div>
        </div>
      </div>
      <Divider className='my-3'/>
      <div className="flex flex-col gap-3 h-full">
        <h1>Products</h1>
        <ScrollShadow className='h-64' hideScrollBar size={20}>
          <div className='flex flex-col gap-3 w-full'>
          {cartState.map((item: cartStateType, index:number) => (
              <div key={index + `_cart_product`} className="flex flex-row justify-between">
                <Image src={ProductImage}alt='product-image' className='h-full' />
                <div className="flex flex-col justify-between text-sm">
                  <h1>{item.productName}</h1>
                  <div className="flex gap-4">
                    <h1>Quantity</h1>
                    <h1>{item.quantity}</h1>
                  </div>
                </div>
                <h1 className="flex justify-start items-start">{`$ ${item.singlePrice}`}</h1>
              </div>
          ))}
            </div>
        </ScrollShadow>
      </div>
    </div>
  )
}

export default OrderCard;
