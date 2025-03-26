from __future__ import unicode_literals

app_name = "insightx"
app_title = "InsightX"
app_publisher = "Your Name"
app_description = "Business Intelligence Dashboard for ERPNext"
app_email = "your.email@example.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = [
    "/assets/insightx/css/insightx.css"
]

app_include_js = [
    "/assets/insightx/js/insightx.js"
]

# include js, css files in header of web template
web_include_css = [
    "/assets/insightx/css/insightx.css"
]

web_include_js = [
    "/assets/insightx/js/insightx.js"
]

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "setup"

# website user home page (by Role)
role_home_page = {
    "Administrator": "setup",
    "System Manager": "setup",
    "User": "setup"
}

# Website Context
# --------------

website_context = {
    "favicon": "/assets/insightx/images/favicon.png",
    "splash_image": "/assets/insightx/images/splash.png",
    "website_title": "InsightX - Business Intelligence Dashboard",
    "top_bar_items": [
        {"label": "Setup", "url": "/setup"},
        {"label": "Dashboard", "url": "/dashboard"}
    ]
} 