'use client'

import { useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination, PaginationItemType } from "@nextui-org/pagination";
import ChevronIcon from "./ChevronIcon"
import clsx from "clsx";
import { DownloadIcon, VisaIcon } from "./icons";

interface TicketType {
  key: string,
  invoiceId: string,
  paymentDate: string,
  paymentMethod: {
    name: string,
    number: number
  },
  amount: number,
};

interface ColumnType {
  key: string,
  label: string,
};

const columns = [
  {
    key: "invoiceId",
    label: "Invoice ID",
  },
  {
    key: "paymentDate",
    label: "Payment Date",
  },
  {
    key: "paymentMethod",
    label: "Payment Method",
  },
  {
    key: "amount",
    label: "Amount",
  },
] as ColumnType[];

const InvoiceTable = ({ rows }: { rows: TicketType[] }) => {
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

  const renderCell = useCallback((ticket: any, columnKey: any) => {
    const cellValue = ticket[columnKey]
    switch (columnKey) {
      case "invoiceId":
        return (
          <div>{ticket.invoiceId}</div>
        )
      case "paymentDate":
        return (
          <div className="flex items-start">
            <div>{ticket.paymentDate}</div>
          </div>
        )
      case "paymentMethod":
        return (
          <div className="flex felx-row justify-start items-center gap-2">
            <VisaIcon />
            <h1>{ticket.paymentMethod.number.toString().split(/(\d{4})/g).join(' ')}</h1>
          </div>
        )
      case "amount":
        return (
          <div className="flex flex-row justify-between items-center">
            <div title={'$ ' + ticket.amount.toString()}>{'$ ' + ticket.amount}</div>
            <Tooltip
              color="primary"
              content="Download Invoice"
              placement="left"
              showArrow={true}
            >
              <span className="text-lg text-primary cursor-pointer active:opacity-50">
                <DownloadIcon />
              </span>
            </Tooltip>
          </div>
        )
      default:
        <div>{cellValue}</div>
    }
  }, [])

  return (
    <Table
      aria-label="Controlled table example with dynamic content"
      isHeaderSticky
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
        {(column: any) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item: any) => (
          <TableRow key={item.key} className="items-center">
            {(columnKey: any) =>
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default InvoiceTable