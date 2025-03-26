import { NextResponse } from 'next/server'
import axios from 'axios'

const ERPNEXT_URL = process.env.ERPNEXT_URL || 'http://localhost:8000'
const ERPNEXT_API_KEY = process.env.ERPNEXT_API_KEY
const ERPNEXT_API_SECRET = process.env.ERPNEXT_API_SECRET

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const reportType = searchParams.get('type')
  const fromDate = searchParams.get('from')
  const toDate = searchParams.get('to')
  const filters = searchParams.get('filters')

  try {
    let endpoint = ''
    let params: any = {}

    switch (reportType) {
      case 'sales':
        endpoint = '/api/resource/Sales Invoice'
        params = {
          filters: [
            ['posting_date', '>=', fromDate],
            ['posting_date', '<=', toDate],
          ],
        }
        break
      case 'purchases':
        endpoint = '/api/resource/Purchase Invoice'
        params = {
          filters: [
            ['posting_date', '>=', fromDate],
            ['posting_date', '<=', toDate],
          ],
        }
        break
      case 'inventory':
        endpoint = '/api/method/erpnext.stock.report.stock_balance.stock_balance.get_data'
        break
      case 'profit-loss':
        endpoint = '/api/method/erpnext.accounts.report.profit_and_loss_statement.profit_and_loss_statement.get_data'
        params = {
          from_date: fromDate,
          to_date: toDate,
        }
        break
      default:
        return NextResponse.json({ error: 'Invalid report type' }, { status: 400 })
    }

    const response = await axios.get(`${ERPNEXT_URL}${endpoint}`, {
      params,
      headers: {
        'Authorization': `token ${ERPNEXT_API_KEY}:${ERPNEXT_API_SECRET}`,
      },
    })

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('ERPNext API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data from ERPNext' },
      { status: 500 }
    )
  }
} 