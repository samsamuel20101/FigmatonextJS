import { Divider } from "@nextui-org/divider";
import { TicketComplaintIcon, TicketOrderIcon, TicketResolvedIcon, TicketReturnIcon, TicketSpamIcon, TicketWaitingForIcon, TicketWarrantyIcon } from "./icons";
import Image from "next/image";
import NewTicketIcon from '@/public/newTicketIcon.svg'
import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { Link } from "@nextui-org/link";

const TicketHiddenMenu = () => {
  return (
    <div className="flex flex-col px-4 py-9 gap-5 shadow-lg bg-foreground-100">
      <h1 className="text-2xl font-medium">Tickets</h1>
      <div className="flex flex-col w-full h-full text-sm font-medium text-foreground">
        <div className="flex flex-col w-full h-full gap-4 justify-between items-start">
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketComplaintIcon /> Complaint </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketWarrantyIcon /> Warranty </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketOrderIcon /> Order Questions </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketReturnIcon /> Return Questions </Link>
        </div>
        <Divider className="my-4"/>
        <div className="flex flex-col w-full h-full gap-4 justify-between items-start">
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><Image src={NewTicketIcon} alt="new tickets" width={20} height={20}/> New Tickets </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketWaitingForIcon /> Waiting for Customer </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketOrderIcon /> Order Resolved </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketResolvedIcon /> Recently Updated </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketReturnIcon /> Return Favourites </Link>
          <Link href="#" size="sm" className="flex flex-row gap-1 text-foreground"><TicketSpamIcon /> Spam </Link>
        </div>
        <Divider className="my-4"/>
        <div className="flex w-full h-full ">
          <Accordion 
            selectionMode="multiple"
            defaultExpandedKeys={["1", "2"]}
            isCompact 
            showDivider={false}
            className="-mt-2"
          >
            <AccordionItem key="1" aria-label="Ticket Status" title="Ticket Status">
              <div className="flex flex-col w-full h-full gap-2 justify-between items-start">
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">New Tickets</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">In Progress</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Human Review</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Closed</Checkbox></div>
              </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Creation Date" title="Creation Date">
              <div className="flex flex-col w-full h-full gap-2 justify-between items-start">
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Today</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Yesterday</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">This Week</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">This Month</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">This Year</Checkbox></div>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Source Store" title="Source Store">
              <div className="flex flex-col w-full h-full gap-2 justify-between items-start">
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Shopify</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Woocommerce</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Amazon</Checkbox></div>
                <div className="flex flex-row gap-1"><Checkbox defaultSelected size="sm">Etsy</Checkbox></div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default TicketHiddenMenu;
