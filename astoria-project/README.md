🧺 Astoria Dry Cleaning Analytics Project

📌 Overview

This project explores digital transformation in the dry cleaning industry using Astoria Dry Cleaning Services (Singapore) as a case study.

It leverages data analytics, forecasting, and optimization techniques to enhance:

- Demand prediction
- Workforce planning
- Route efficiency
- Revenue performance
- Customer experience

🚀 Key Impact
📈 Identified dual booking peaks (08:00–10:00, 20:00–22:00) to optimise staffing
🚚 Improved delivery planning through zone-based clustering
👨‍🔧 Enhanced manpower allocation using workload modelling (effort scores)
💰 Discovered key revenue drivers: express services, order quantity, service type
📍 Identified high-value zones (e.g. CBD ~ SGD 67 average order value)
📦 Highlighted operational bottlenecks (e.g. 12:00–16:00 delivery slot overload)


📂 Project Structure
astoria-project/
│
├── data1/
│   └── astoria_orders.csv
│
├── src/
│   ├── dashboard/
│   ├── peak_demand_analytics/
│   ├── regression/
│   ├── route_optimization_analytics/
│
├── README.md
└── requirements.txt

📊 Dataset Overview
- 4,500 synthetic orders (Jan 2024 – Jun 2025)

Key Features
- Customer Behaviour: booking_time, booking_hour
- Operations Constraint: collection_time (09:00–17:00 only)
- Logistics: zones, postal codes, latitude/longitude
- Revenue Drivers: service type, express options, pricing
- Workload Indicator: effort_score (1–5)


📊 Analytics Modules
🗺️ Route Optimisation
- Applied K-Means clustering to group orders geographically
- Identified high-density zones (Bishan, Tampines)
- Enabled zone-based routing & driver allocation

⏰ Peak Demand Analysis
- Conducted hourly demand analysis & time-series forecasting
- Identified morning and night booking peaks
- Found 12:00–16:00 delivery slot accounts for ~43% demand
- Supported better scheduling and slot control

👨‍🔧 Manpower Optimization
- Modelled workload using effort scores
- Aligned staffing with demand patterns
- Reduced under- and over-staffing risks


💰 Revenue Prediction
- Built regression models to predict order value

Key drivers:
- Express services
- Order quantity

Service type
🚚 Route Optimization Analytics
- Improved logistics efficiency
- Reduced travel time and delivery inefficiencies

📈 Dashboard

Interactive dashboard built with:

- HTML, CSS, JavaScript

Visualises:

- Demand trends
- Revenue insights
- Operational KPIs

🛠️ Tech Stack
- Python: Pandas, NumPy, Scikit-learn
- Forecasting: Holt-Winters
- Geospatial Analysis: Folium
- Frontend: HTML, CSS, JavaScript

Tools: Jupyter Notebook
⚙️ Setup Instructions
1. Clone Repository
git clone https://github.com/xiangyingg/IS215-dry-cleaning-services-analytics
cd astoria-project

2. Create Virtual Environment
python -m venv venv

Activate:

# Mac/Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
3. Install Dependencies
pip install -r requirements.txt

4. Dataset Path ⚠️

Ensure dataset is located at:

data1/astoria_orders.csv

Example:

import pandas as pd
df = pd.read_csv("../data1/astoria_orders.csv")

5. Run Notebooks
jupyter notebook

Run modules inside:

src/

6. Run Dashboard

Open in browser:

src/dashboard/dashboard.html

💡 Tip: Use VS Code Live Server if charts do not load properly.

🎯 Project Objective
To transform traditional dry cleaning operations into a data-driven, optimized system that:

- Enhances operational efficiency
- Improves service reliability
- Supports better decision-making
- Elevates customer experience

⚠️ Notes
Dataset is synthetic (simulation purposes)
Models are not production-ready


## 👥 Team
**Xiang Ying** — Data Analyst  
GitHub: https://github.com/xiangyingg  

**Ji Ning** — Data Analyst  
GitHub: https://github.com/ningg02  

**Marcus** — Full Stack Developer  
GitHub: https://github.com/marcang0803  

**Wee Kiat** — Full Stack Developer  
GitHub: https://github.com/weekiat2003-lab  

**Ernest** — Collaborator  
GitHub: https://github.com/ernestwongx  

**Charlotte** — Collaborator  
GitHub: https://github.com/lottepi  
