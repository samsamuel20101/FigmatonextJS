'use client'

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import { Link } from "@nextui-org/link";
import {Chip} from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import {Pagination, PaginationItemType, PaginationItemRenderProps} from "@nextui-org/pagination";
import ShopifyIcon from '@/public/shopify.svg'
import MailIcon from '@/public/mail.svg'
import NetherlandsFlag from '@/public/Netherlands.svg'
import EyeIcon from './EyeIcon'
import ChevronIcon from "./ChevronIcon"
import clsx from "clsx";
import EditIcon from "./StarIcon";
import { DeleteIcon } from "./icons";

interface TicketType {
  key: string,
  ticketId: string,
  source: {
    link: string,
    email: string,
  },
  customer: {
    name: string, 
    country: string, 
    email: string
  },
  status: string,
  allClasifications: string,
  lastUpdate: {
    message: string, 
    elapsedTime: number
  },
  totalValue: number,
};

interface ColumnType {
  key: string,
  label: string,
};

const columns = [
  {
    key: "ticketId",
    label: "Ticket ID",
  },
  {
    key: "source",
    label: "Source",
  },
  {
    key: "customer",
    label: "Customer",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "allClasifications",
    label: "All Clasifications",
  },
  {
    key: "lastUpdate",
    label: "Last Update",
  },
  {
    key: "totalValue",
    label: "Total Value",
  },
  {
    key: "actions",
    label: "Actions",
  },
] as ColumnType[];

const TicketTable = ({rows} : {rows: TicketType[]}) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection | any>(new Set(["2","4","5","10"]));

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: any) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className={clsx(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onNext}>
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className={clsx(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onPrevious}>
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }

    // cursor is the default item
    return (
      <button
        ref={ref}
        key={key}
        className={clsx(
          className,
          isActive &&
            "text-white bg-gradient-to-br from-blue-500 to-blue-500 font-bold",
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  
  const renderCell = useCallback((ticket : any, columnKey: any) => {
    const cellValue = ticket[columnKey] 
    switch (columnKey) {
      case "ticketId":
        return (
          <div>{cellValue}</div>
        )
      case "source":
        return (
          <div className="flex flex-col justify-start items-start">
            <div>Woocommerce</div>
            <div className="flex flex-row justify-center items-center gap-2">
              <Link href={ticket.source.link} size="md">
                <Image src={ShopifyIcon} width={16} height={16} alt="shopify" />
              </Link>
              <Link href={`mailto:${ticket.source.email}`} size="md">
                <Image src={MailIcon} width={16} height={16} alt="inbox" />
              </Link>
            </div>
          </div>
        )
      case "customer":
        return (
          <div className="flex flex-col justify-center items-center">
            <div className="flex felx-row justify-center items-center gap-2">
              <h1>{ticket.customer.name}</h1>
              <Image src={NetherlandsFlag} alt={ticket.customer.country} title="Netherlands (NL)" width={16} height={16} />
            </div>
            <div>{ticket.customer.email}</div>
          </div>
        )
      case "status":
        switch (ticket.status) {
          case "New Ticket":
            return <Chip size="sm" color="primary" className="bg-opacity-30 text-primary">{cellValue}</Chip>
          case "In Progress":
            return <Chip size="sm" color="warning" className="bg-opacity-30 text-warning">{cellValue}</Chip>
          case "Human Review":
            return <Chip size="sm" color="danger" className="bg-opacity-30 text-danger">{cellValue}</Chip>
          default:
            break;
        }
      case "allClasifications":
        return (
          <div>{cellValue}</div>
        )
      case "lastUpdate":
        return (
          <div className="leading-6 gap-1">
            <div>{ticket.lastUpdate.message}</div>
            <div className="text-gray-400">{`${ticket.lastUpdate.elapsedTime} hours ago`}</div>
          </div>
        )
      case "totalValue":
        return (
          <div>{cellValue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}</div>
        )
      case "actions":
        return (
            <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit ticket">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete ticket">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        )
      default:
        <div>{cellValue}</div>
    }
  },[])

  return (
    <Table
      aria-label="Controlled table example with dynamic content"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={(keys) => setSelectedKeys(keys)}
      bottomContent={
        rows.length >= 10 &&
        <div className="flex flex-row-reverse pr-5">
          <Pagination
            disableCursorAnimation
            showControls
            total={5}
            initialPage={1}
            className="gap-2"
            radius="full"
            renderItem={renderItem}
            variant="light"
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column : any) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item : any) => (
          <TableRow key={item.key} className="items-center">
            {(columnKey : any) => 
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default TicketTable