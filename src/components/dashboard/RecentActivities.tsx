import React from 'react'
import { format } from 'date-fns'

const activities = [
  {
    id: 1,
    type: 'report',
    title: 'Monthly Sales Report',
    description: 'Generated monthly sales report for January 2024',
    timestamp: new Date(),
    user: 'John Doe',
  },
  {
    id: 2,
    type: 'export',
    title: 'Inventory Export',
    description: 'Exported current inventory data to Excel',
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    user: 'Jane Smith',
  },
  {
    id: 3,
    type: 'view',
    title: 'Profit & Loss View',
    description: 'Viewed quarterly profit and loss statement',
    timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    user: 'Mike Johnson',
  },
]

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                          activity.type === 'report'
                            ? 'bg-blue-500'
                            : activity.type === 'export'
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                        }`}
                      >
                        <span className="sr-only">{activity.type}</span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {activity.description}{' '}
                          <span className="font-medium text-gray-900">{activity.user}</span>
                        </p>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {format(activity.timestamp, 'MMM d, yyyy h:mm a')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 