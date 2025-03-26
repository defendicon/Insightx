import DashboardLayout from '@/components/layouts/DashboardLayout'
import SummaryCards from '@/components/dashboard/SummaryCards'
import RecentActivities from '@/components/dashboard/RecentActivities'

export default function Home() {
  return (
    <DashboardLayout>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <SummaryCards />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          <RecentActivities />
        </div>
      </main>
    </DashboardLayout>
  )
} 