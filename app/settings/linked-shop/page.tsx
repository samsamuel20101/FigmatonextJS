"use client"

import { Input } from "@nextui-org/input";
import { ConnectionIcon, EditIcon, ShopifyIcon, WoocommerceIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Key } from '@react-types/shared';
import { useState } from "react";
import StoreTable from "@/components/storeTable";

const rows = [
  {
    key: "1",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "2",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "3",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "4",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "5",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "6",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "7",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "8",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "9",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "10",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
  {
    key: "10",
    storeId: "000245554",
    storeName: "Home & Deco",
    source: 'Shopify',
    status: 'Active',
    websiteLink: 'https://homedeco.myshopify.com'
  },
];

export default function LinkedShopPage() {
  const [integrationSelected, setIntegrationSelected] = useState<string | Key>("shopify")
  return (
    <div className="flex flex-row gap-40 w-full h-full pt-4">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-lg font-bold">Linked Shop</h2>
        <div className="flex items-start pb-3 border-b-1 text-lg font-medium max-w-md">
          <h2>Integrations</h2>
        </div>
        <Tabs
          aria-label="Options"
          selectedKey={integrationSelected}
        // onSelectionChange={setIntegrationSelected}
        >
          <Tab
            key="shopify"
            title={
              <div className="flex flex-col gap-4 py-2">
                <div className="flex items-center space-x-2">
                  <ShopifyIcon />
                  <span className="text-base font-bold">Shopify</span>
                </div>
                <div className="max-w-[183px] whitespace-break-spaces text-start">Boost your Shopify store&apos;s performance.</div>
              </div>
            }
            className="h-full"
          >
            <div className="flex flex-col gap-6 w-full h-full -mt-5">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex items-start pb-3 border-b-1 text-lg font-medium">
                  <h2>Linked Shops</h2>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2 items-start">
                    <div className="flex flex-row gap-1 justify-center items-center text-lg font-bold">
                      <ShopifyIcon />
                      <h1>Link Shopify store</h1>
                    </div>
                    <div>Sync your Shopify store to add product to your catalog.</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Input
                      type="string"
                      radius="none"
                      variant="bordered"
                      placeholder="My Shopify Store"
                      labelPlacement="outside"
                      className="w-full"
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">.myshopify.com</span>
                        </div>
                      }
                    />
                    <div>
                      <Button radius="full" color="primary" size="md" variant="solid" startContent={<ConnectionIcon />}>
                        Link Shop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <StoreTable rows={rows} />
              </div>
            </div>
          </Tab>
          <Tab
            key="woocommerce"
            title={
              <div className="flex flex-col gap-4 py-2">
                <div className="flex items-center space-x-2">
                  <WoocommerceIcon />
                  <span className="text-base font-bold">Woocommerce</span>
                </div>
                <div className="max-w-[183px] whitespace-break-spaces text-start">Coming Soon</div>
              </div>

            }
            className="h-[102px]"
          >
            Woocommerce
          </Tab>

        </Tabs>
      </div>
    </div>
  )
}