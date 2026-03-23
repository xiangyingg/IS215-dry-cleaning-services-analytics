# IS215-dry-cleaning-services-analytics

This project examines digital transformation opportunities in the dry cleaning industry, using Astoria Dry Cleaning Services as a case study. It applies data analytics and digital solutions to generate business insights, optimise route planning, forecast demand, and improve workforce planning—enhancing both operational efficiency and customer experience in Singapore.

📂 Project Structure
astoria-project/
│
├── data1/
│   └── astoria_orders.csv  # Main synthetic orders dataset (4,500 rows, Jan 2024–Jun 2025)
│
├── src/
│   ├── manpower_optimize/
│   │   └── astoria_manpower_optimization.ipynb
│   │
│   ├── peak_demand/
│   │   ├── astoria_peak_demand.ipynb
│   │   ├── fig1_hourly_pattern.png
│   │   ├── fig2_period_summary.png
│   │   ├── fig3_dow_patterns.png
│   │   ├── fig4_monthly_trend.png
│   │   ├── fig5_weekly_heatmap.png
│   │   ├── fig6_slot_demand.png
│   │   ├── fig7_slot_crossanalysis.png
│   │   ├── fig8_zone_hour.png
│   │   └── fig9_rider_forecast.png
│   │
│   ├── peak_demand2/
│   │   ├── astoria_peak_demand.ipynb
│   │   ├── day_hour_heatmap.png
│   │   ├── demand_forecast.png
│   │   ├── hourly_demand.png
│   │   ├── monthly_weekly_trend.png
│   │   ├── peak_vs_offpeak.png
│   │   ├── rider_allocation.png
│   │   ├── seasonal_decomposition.png
│   │   ├── slot_demand_timing.png
│   │   ├── time_bucket_demand.png
│   │   └── zone_peak_bookings.png
│   │
│   ├── route_optimize/
│   │   ├── astoria_route_optimisation.ipynb
│   │   ├── astoria_heatmap.html
│   │   ├── cluster_profiling.png
│   │   ├── driver_allocation.png
│   │   ├── kmeans_clusters_scatter.png
│   │   ├── kmeans_elbow_silhouette.png
│   │   ├── slot_preference_by_zone.png
│   │   └── zone_day_heatmap.png
│   │
│   └── workforce_planning/
│       ├── astoria_workforce_planning.ipynb
│       ├── fig1_effort_overview.png
│       ├── fig2_service_workload.png
│       ├── fig3_4_category_analysis.png
│       ├── fig5_processing_heatmap.png
│       ├── fig6_express_pressure.png
│       ├── fig6b_express_effort.png
│       ├── fig7_weekly_forecast.png
│       ├── fig8_dow_patterns.png
│       ├── fig9_tech_allocation.png
│       └── fig10_routing_matrix.png
│
├── README.md
├── requirements.txt
└── .gitignore


Dataset Overview
File: astoria_orders.csv  
Rows: 4,500 synthetic orders (Jan 2024 – Jun 2025)

Column	Description
order_id	Unique order identifier (AST-00001 …)
booking_date	Date the order was placed
booking_time	Time the order was placed (0–23h, reflects customer behaviour)
booking_hour	Integer hour extracted from booking_time
booking_day_of_week	Day name (Monday–Saturday)
collection_date	Date of pickup by driver
collection_time	Time of pickup (09:00–17:00, Mon–Sat)
delivery_date	Date order was delivered back
delivery_slot	Delivery window: 09–13h, 12–16h, 15–18h
zone	Singapore delivery zone (e.g. Bishan / Toa Payoh)
postal_district	Singapore postal district (e.g. District 20)
postal_code	6-digit Singapore postal code
latitude / longitude	Coordinates of order location
service	Service type (e.g. Shirt, Curtains, Luxury Bag)
category	Service category (Clothing, Household, Bags & Shoes)
quantity	Number of items in the order
base_price_sgd	Base price per item (SGD)
delicate_surcharge	Additional $4 charge for delicate items
express_type	Express tier: None, Next-day, Same-day, 3-Hour
express_multiplier	Revenue multiplier (1×, 2×, or 3×)
order_value_sgd	Final order value (SGD)
free_delivery	Yes if order ≥ $40
processing_days	Estimated days to process
processing_label	Human-readable processing time (e.g. 7–14 days)
effort_score	Workload complexity score (1–5)
order_status	Completed / In Progress / Pending Delivery

Note:

booking_time = when customer placed order (any hour, including evenings).

collection_time = operational pickup hours (09:00–17:00, Mon–Sat).

These signals are analysed separately.

📊 Problem Statements & Notebooks
1. 🗺️ Route Optimisation — astoria_route_optimisation.ipynb
Goal: Cluster orders by zone to identify high-density areas and estimate driver needs.

Methods: K-Means clustering, Folium heatmaps, zone × day-of-week analysis.

Key Insight: Bishan/Toa Payoh and Tampines/Pasir Ris are highest-density clusters; CBD orders are low volume but highest average value (~SGD 67).

Decision Supported: Zone-based routing, dedicated drivers per cluster, pre-sorting bags by zone.

2. ⏰ Peak Demand Timing — astoria_peak_demand.ipynb / astoria_peak_demand_v2.ipynb
Goal: Identify booking vs collection peaks for rider allocation.

Methods: Hourly distributions, time buckets, Holt-Winters forecasting.

Key Insight: Two booking peaks (08–10h, 20–22h). Collections next day. 12–16h slot carries ~43% of deliveries.

Decision Supported: WhatsApp responsiveness at night, +1 rider on Fridays, cap 12–16h slot.

3. 👥 Workforce Planning — astoria_workforce_planning.ipynb
Goal: Analyse workload distribution and forecast weekly effort.

Methods: Effort scoring, workload heatmaps, routing matrices.

Key Insight: Express services disproportionately increase workload pressure.

Decision Supported: Adjust staffing for express tiers, balance workload across categories.

⚙️ Setup & Running
Requirements:

bash
pip install pandas numpy matplotlib seaborn scikit-learn statsmodels folium plotly
Steps:

Clone or download this project folder.

Place astoria_orders.csv in the same directory as notebooks.

Open notebooks in Jupyter Notebook, JupyterLab, or Google Colab.

Run all cells top to bottom.

Google Colab Quick Start:

python
from google.colab import files
files.upload()  # select astoria_orders.csv
🏪 Business Context
Astoria Cleaning Services (Singapore) offers:

Standard & express cleaning (same-day / next-day / 3-hour)

Specialist care for delicate items (leather, curtains, carpets)

Free pickup/delivery for orders ≥ SGD 40

Collection: Mon–Sat, 09:00–17:00

Delivery slots: 09–13h · 12–16h · 15–18h

Pricing Highlights:

Standard garments: SGD 9–20

Premium/delicate items: SGD 45–120 (+SGD 4 surcharge)

Express services: 2×–3× base rate

Long processing items: 7–14 days

📌 Notes
All data is synthetic, generated for analytical purposes.

Postal codes and coordinates are representative of Singapore zones.

Sunday excluded (Astoria closed).

Processing times vary during peak seasons (school holidays, festive periods).