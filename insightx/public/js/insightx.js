frappe.provide('insightx');

insightx.Chart = class Chart {
    constructor(options) {
        this.parent = options.parent;
        this.data = options.data;
        this.type = options.type;
        this.options = options.options;
        
        this.init();
    }
    
    init() {
        // Create chart using Frappe Charts
        this.chart = new frappe.Chart(this.parent, {
            data: {
                labels: this.data.map(d => d.posting_date),
                datasets: [{
                    name: this.type === 'sales' ? 'Sales' : 'Purchases',
                    values: this.data.map(d => d.grand_total),
                    chartType: this.type
                }]
            },
            type: this.type,
            height: 300,
            colors: ['#7cd6fd'],
            axisOptions: {
                xAxisMode: 'tick',
                xIsSeries: 1,
                xAxisType: 'datetime'
            },
            ...this.options
        });
    }
}; 