from __future__ import unicode_literals

import frappe

def get_context(context):
    context.read_only = 1 