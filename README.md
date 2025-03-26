# InsightX - Business Intelligence Dashboard

A modern web application for displaying and analyzing business reports from ERPNext.

## Features

- Dashboard with summary cards and recent activities
- Sales Report with interactive charts
- Purchase Report
- Inventory Report
- Profit & Loss Report
- Expense Report
- HR/Payroll Reports
- Custom Reports
- ERPNext Integration
- Modern UI with Tailwind CSS
- Responsive Design

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Recharts
- React Query
- Axios
- ERPNext REST API

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- ERPNext instance with API access

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/insightx.git
cd insightx
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env.local` file in the root directory and add your ERPNext credentials:
```env
ERPNEXT_URL=http://your-erpnext-instance
ERPNEXT_API_KEY=your_api_key
ERPNEXT_API_SECRET=your_api_secret
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
insightx/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── erpnext/
│   │   │       └── route.ts
│   │   ├── reports/
│   │   │   └── sales/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── layouts/
│       │   └── DashboardLayout.tsx
│       └── dashboard/
│           ├── SummaryCards.tsx
│           └── RecentActivities.tsx
├── public/
├── .env.local
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 