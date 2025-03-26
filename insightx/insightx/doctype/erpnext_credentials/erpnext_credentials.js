frappe.ui.form.on('ERPNext Credentials', {
    refresh: function(frm) {
        frm.add_custom_button(__('Test Connection'), function() {
            frm.trigger('test_connection');
        });
    },
    
    test_connection: function(frm) {
        frappe.call({
            method: 'insightx.insightx.doctype.erpnext_credentials.erpnext_credentials.ERPNextCredentials.test_connection',
            args: {
                'erpnext_url': frm.doc.erpnext_url,
                'api_key': frm.doc.api_key,
                'api_secret': frm.doc.api_secret
            },
            callback: function(r) {
                if (r.exc) {
                    frappe.msgprint({
                        title: __('Error'),
                        indicator: 'red',
                        message: r.exc
                    });
                }
            }
        });
    }
}); 