'use client'

import { useCallback, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination, PaginationItemType } from "@nextui-org/pagination";
import ChevronIcon from "./ChevronIcon"
import clsx from "clsx";
import { DeleteIcon, DownloadIcon, EditIcon, ShopifyIcon, VisaIcon } from "./icons";
import EyeIcon from "./EyeIcon";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";

interface TicketType {
  key: string,
  storeId: string,
  storeName: string,
  source: string,
  status: string,
  websiteLink: string
};

interface ColumnType {
  key: string,
  label: string,
};

const columns = [
  {
    key: "storeId",
    label: "Store ID",
  },
  {
    key: "storeName",
    label: "Store Name",
  },
  {
    key: "source",
    label: "Source",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "websiteLink",
    label: "Website Link",
  },
  {
    key: "actions",
    label: "Actions",
  },
] as ColumnType[];

const StoreTable = ({ rows }: { rows: TicketType[] }) => {

  const [selectedKeys, setSelectedKeys] = useState<Selection | any>(new Set(["2", "4", "5", "10"]));
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(rows.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);
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
      case "storeId":
        return (
          <div>{ticket.storeId}</div>
        )
      case "storeName":
        return (
          <div className="flex items-start">
            <div>{ticket.storeName}</div>
          </div>
        )
      case "source":
        return (
          <div className="flex felx-row justify-start items-center gap-2">
            <ShopifyIcon className="w-5 h-5"/>
            <h1>{ticket.source}</h1>
          </div>
        )
      case "status":
        return (
          <Chip size="sm" color="primary" className="bg-opacity-30 text-primary">{ticket.status}</Chip>
        )
      case "websiteLink":
        return (
          <div className="flex felx-row justify-start items-center gap-2">
            <Link size="sm" href={ticket.websiteLink}>{ticket.websiteLink}</Link>
          </div>
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
  }, [])

  return (
    <Table
      aria-label="Controlled table example with dynamic content"
      isHeaderSticky
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={(keys) => setSelectedKeys(keys)}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column: any) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
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

export default StoreTable