import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  CubeIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Sales Report', href: '/reports/sales', icon: ChartBarIcon },
  { name: 'Purchase Report', href: '/reports/purchases', icon: ShoppingCartIcon },
  { name: 'Inventory Report', href: '/reports/inventory', icon: CubeIcon },
  { name: 'Profit & Loss', href: '/reports/profit-loss', icon: CurrencyDollarIcon },
  { name: 'Expense Report', href: '/reports/expenses', icon: ReceiptPercentIcon },
  { name: 'HR Reports', href: '/reports/hr', icon: UserGroupIcon },
  { name: 'Custom Reports', href: '/reports/custom', icon: DocumentTextIcon },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">InsightX</h1>
          </div>
          <nav className="mt-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                    isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <header className="bg-white shadow">
            <div className="px-4 py-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {navigation.find((item) => item.href === pathname)?.name || 'Dashboard'}
                </h2>
                <div className="flex items-center">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
} 