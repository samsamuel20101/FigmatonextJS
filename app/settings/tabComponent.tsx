"use client"

import { AccountIcon, BillingPlanIcon, InvoiceHistoryIcon, SecurityIcon, ShoppingCartIcon } from "@/components/icons";
import { Tab, Tabs } from "@nextui-org/tabs"
import { useState } from "react"
import { Key } from '@react-types/shared';
import { usePathname, useRouter } from "next/navigation";

const TabComponent = () => {
  const pathname = usePathname()
	const [selected, setSelected] = useState<string | Key>(pathname.slice(1).split('/')[1])
	const router = useRouter()
  // console.log(pathname.slice(1).split('/')[1])
	const handleTab = (key: string) => {
		setSelected(key)
		router.push('/settings/' + key, { scroll: false })
	}
  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="underlined"
      selectedKey={selected}
      onSelectionChange={key => handleTab(key as string)}
    >
      <Tab
        key="account"
        title={
          <div className="flex items-center space-x-2">
            <AccountIcon />
            <span>Account</span>
          </div>
        }
      >
      </Tab>
      <Tab
        key="security"
        title={
          <div className="flex items-center space-x-2">
            <SecurityIcon />
            <span>Security</span>
          </div>
        }
      >
      </Tab>
      <Tab
        key="billing"
        title={
          <div className="flex items-center space-x-2">
            <BillingPlanIcon />
            <span>Billing and Plans</span>
          </div>
        }
      >
      </Tab>
      <Tab
        key="invoice"
        title={
          <div className="flex items-center space-x-2">
            <InvoiceHistoryIcon />
            <span>Invoice History</span>
          </div>
        }
      >
      </Tab>
      <Tab
        key="linked-shop"
        title={
          <div className="flex items-center space-x-2">
            <ShoppingCartIcon />
            <span>Linked Shop</span>
          </div>
        }
      >
      </Tab>
    </Tabs>
  )
}

export default TabComponent
