from __future__ import unicode_literals

import frappe
import requests
from frappe import _
from frappe.model.document import Document

class ERPNextCredentials(Document):
    def validate(self):
        if not self.erpnext_url:
            frappe.throw(_("ERPNext URL is required"))
        if not self.api_key:
            frappe.throw(_("API Key is required"))
        if not self.api_secret:
            frappe.throw(_("API Secret is required"))

    def test_connection(self):
        """Test connection to ERPNext instance"""
        try:
            response = requests.get(
                f"{self.erpnext_url}/api/method/frappe.auth.get_logged_user",
                headers={
                    "Authorization": f"token {self.api_key}:{self.api_secret}"
                }
            )
            response.raise_for_status()
            frappe.msgprint(_("Connection successful!"))
        except requests.exceptions.RequestException as e:
            frappe.throw(_("Connection failed: {0}").format(str(e)))

    def on_update(self):
        """Update system settings with credentials"""
        frappe.db.set_value("InsightX Settings", "InsightX Settings", "erpnext_url", self.erpnext_url)
        frappe.db.set_value("InsightX Settings", "InsightX Settings", "api_key", self.api_key)
        frappe.db.set_value("InsightX Settings", "InsightX Settings", "api_secret", self.api_secret) 