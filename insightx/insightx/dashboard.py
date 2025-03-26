from __future__ import unicode_literals

import frappe
from frappe import _
from frappe.utils import getdate, add_days

def get_context(context):
    context.no_cache = 1
    context.show_sidebar = True
    context.title = _('Dashboard')
    
    # Get summary data
    context.summary = get_summary_data()
    
    # Get chart data
    context.charts = get_chart_data()
    
    # Get recent activities
    context.recent_activities = get_recent_activities()

def get_summary_data():
    """Get summary data for dashboard cards"""
    today = getdate()
    last_month = add_days(today, -30)
    
    return {
        'total_sales': get_total_sales(last_month, today),
        'total_purchases': get_total_purchases(last_month, today),
        'inventory_value': get_inventory_value(),
        'active_employees': get_active_employees()
    }

def get_total_sales(from_date, to_date):
    """Get total sales for the period"""
    return frappe.db.sql("""
        SELECT COALESCE(SUM(grand_total), 0)
        FROM `tabSales Invoice`
        WHERE posting_date BETWEEN %s AND %s
        AND docstatus = 1
    """, [from_date, to_date])[0][0]

def get_total_purchases(from_date, to_date):
    """Get total purchases for the period"""
    return frappe.db.sql("""
        SELECT COALESCE(SUM(grand_total), 0)
        FROM `tabPurchase Invoice`
        WHERE posting_date BETWEEN %s AND %s
        AND docstatus = 1
    """, [from_date, to_date])[0][0]

def get_inventory_value():
    """Get total inventory value"""
    return frappe.db.sql("""
        SELECT COALESCE(SUM(valuation_rate * actual_qty), 0)
        FROM `tabBin`
        WHERE actual_qty > 0
    """)[0][0]

def get_active_employees():
    """Get count of active employees"""
    return frappe.db.sql("""
        SELECT COUNT(*)
        FROM `tabEmployee`
        WHERE status = 'Active'
    """)[0][0]

def get_chart_data():
    """Get data for charts"""
    today = getdate()
    last_6_months = add_days(today, -180)
    
    # Sales trend
    sales_data = frappe.db.sql("""
        SELECT posting_date, grand_total
        FROM `tabSales Invoice`
        WHERE posting_date BETWEEN %s AND %s
        AND docstatus = 1
        ORDER BY posting_date
    """, [last_6_months, today], as_dict=1)
    
    # Purchase trend
    purchase_data = frappe.db.sql("""
        SELECT posting_date, grand_total
        FROM `tabPurchase Invoice`
        WHERE posting_date BETWEEN %s AND %s
        AND docstatus = 1
        ORDER BY posting_date
    """, [last_6_months, today], as_dict=1)
    
    return {
        'sales_trend': sales_data,
        'purchase_trend': purchase_data
    }

def get_recent_activities():
    """Get recent activities"""
    return frappe.db.sql("""
        SELECT 
            doctype,
            name,
            modified,
            modified_by
        FROM `tabVersion`
        WHERE modified > DATE_SUB(NOW(), INTERVAL 24 HOUR)
        ORDER BY modified DESC
        LIMIT 10
    """, as_dict=1) 