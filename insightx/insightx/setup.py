from __future__ import unicode_literals

import frappe
from frappe import _
from frappe.utils import cint

def get_context(context):
    context.no_cache = 1
    context.show_sidebar = False
    
    # Check if credentials are already set
    credentials = frappe.get_single("ERPNext Credentials")
    if credentials and credentials.erpnext_url:
        context.credentials_set = True
    else:
        context.credentials_set = False 