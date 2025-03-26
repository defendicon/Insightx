import React from 'react'
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CubeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const cards = [
  {
    title: 'Total Sales',
    value: '₹1,234,567',
    change: '+12.5%',
    icon: CurrencyDollarIcon,
    color: 'bg-green-500',
  },
  {
    title: 'Total Purchases',
    value: '₹987,654',
    change: '+8.2%',
    icon: ShoppingCartIcon,
    color: 'bg-blue-500',
  },
  {
    title: 'Inventory Value',
    value: '₹456,789',
    change: '-3.1%',
    icon: CubeIcon,
    color: 'bg-yellow-500',
  },
  {
    title: 'Active Employees',
    value: '156',
    change: '+2.4%',
    icon: UserGroupIcon,
    color: 'bg-purple-500',
  },
]

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{card.value}</p>
            </div>
            <div className={`${card.color} p-3 rounded-full`}>
              <card.icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`text-sm font-medium ${
                card.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {card.change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  )
} 