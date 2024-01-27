'use client'

import NetherlandsFlag from '@/public/Netherlands.svg'
import Image from 'next/image';
import MailIcon from '@/public/mail.svg'
import PhoneIcon from '@/public/phone.svg'
import { Divider } from '@nextui-org/divider';
import { useContext, useEffect, useState } from 'react';
import { CartContext, cartStateType } from '@/app/cartProvider';

const ContactCard = () => {
  const [customer, setCustomer] = useState<string>('Mykola Semen')
  const [cartState] = useContext<cartStateType[] | any>(CartContext)

  return (
    <div className="flex flex-col w-full h-auto font-medium">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-start gap-2 text-medium font-medium">
          <h1>{customer}</h1>
          <Image src={NetherlandsFlag} alt='netherlands-flag' />
        </div>
        <div className="flex flex-row items-center justify-between text-sm font-normal text-foreground-500">
          <h1>Customer since</h1>
          <h1>Thu, Nov 16, 2023</h1>
        </div>
        <div className="flex flex-row justify-between text-sm items-center">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <Image src={MailIcon} alt='mail icon' width={20} height={20} />
              <h1>Email</h1>
            </div>
            <h1>mykola@test.com</h1>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <Image src={PhoneIcon} alt='mail icon' width={20} height={20} />
              <h1>Contact</h1>
            </div>
            <h1>+3197010265159</h1>
          </div>
        </div>
      </div>
      <Divider className='my-3' />
      <div className="flex flex-col gap-3">
        <div className='flex flex-row justify-between text-sm'>
          <h1>Number of Orders</h1>
          <h1>{cartState.length}</h1>
        </div>
        <div className='flex flex-row justify-between text-lg'>
          <h1>Total</h1>
          <h1>{`$ `}
            {cartState.reduce((initial: number, reduceItem: cartStateType) => {
              return initial += reduceItem.singlePrice * reduceItem.quantity
            }, 0)}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;
