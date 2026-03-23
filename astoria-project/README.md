# IS215-dry-cleaning-services-analytics

This project explores digital transformation opportunities in the dry cleaning services industry. Using Astoria Dry Cleaning Services as a case study, it leverages data analytics and digital solutions to generate business insights and improve operational efficiency and customer experience.

Astoria Cleaning Services — Analytics Project

Data-driven analysis to optimise route planning, forecast peak demand, and plan workforce capacity for Astoria Cleaning Services (Singapore).

Project Structure
astoria-analytics/
│
├── data1/
│   ├── astoria_orders.csv          # Main synthetic orders dataset (4,500 rows, Jan 2024–Jun 2025)
│
│── requirements.txt
└── README.md


🗂️ Dataset Overview
astoria_orders_v2.csv — Main Dataset
4,500 synthetic orders generated to reflect realistic Astoria operations.
ColumnDescriptionorder_idUnique order identifier (AST-00001 …)booking_dateDate the order was placedbooking_timeTime the order was placed (0–23h, reflects real customer behaviour)booking_hourInteger hour extracted from booking_timebooking_day_of_weekDay name (Monday–Saturday)collection_dateDate of pickup by drivercollection_timeTime of pickup — strictly 9am–5pm Mon–Satdelivery_dateDate order was delivered back to customerdelivery_slotDelivery window: 09:00-13:00, 12:00-16:00, or 15:00-18:00zoneSingapore delivery zone (e.g. Bishan / Toa Payoh)postal_districtSingapore postal district label (e.g. District 20)postal_code6-digit Singapore postal codelatitudeLatitude coordinate of order locationlongitudeLongitude coordinate of order locationserviceService type (e.g. Shirt / Blouse, Curtains, Luxury Bag)categoryService category (Clothing, Household, Bags & Shoes, etc.)quantityNumber of items in the orderbase_price_sgdBase price per item (SGD)delicate_surchargeAdditional $4.00 charge for delicate/complex itemsexpress_typeExpress tier: None, Next-day, Same-day, 3-Hourexpress_multiplierRevenue multiplier (1×, 2×, or 3×)order_value_sgdFinal order value (SGD)free_deliveryYes if order ≥ $40, otherwise Noprocessing_daysEstimated days to process the serviceprocessing_labelHuman-readable processing time (e.g. 7–14 days)effort_scoreWorkload complexity score (1 = simple, 5 = complex)order_statusCompleted / In Progress / Pending Delivery


Note on booking_time vs collection_time:
booking_time reflects when a customer placed their order (can be any hour, including evenings).
collection_time is strictly 9am–5pm as per Astoria's operational hours.
These two signals are kept separate throughout the analysis.

📊 Problem Statements & Notebooks
1. 🗺️ Route Optimisation — astoria_route_optimisation.ipynb
Goal: Cluster orders by geographical zone to identify high-density delivery areas and estimate the number of drivers required per zone.
Key analyses:

Zone-level order and revenue concentration
K-Means clustering on lat/lng coordinates (elbow + silhouette method)
Interactive Folium heatmap of all order locations → saved as astoria_heatmap.html
Monthly trend by zone, zone × day-of-week heatmap
Driver estimation per zone and delivery slot
Cluster profiling (order value, express rate, effort score)

Key insight generated:

Bishan/Toa Payoh and Tampines/Pasir Ris are the two highest-density clusters, consistently driving the most orders. CBD orders are low volume but highest average order value ($67+).

Decisions supported:

Implement zone-based delivery routing instead of order-by-order dispatch
Assign dedicated drivers per cluster
Pre-sort collection bags by zone before dispatch


2. ⏰ Peak Demand Timing — astoria_peak_demand_v2.ipynb
Goal: Identify when demand peaks to allocate riders and collection slots more efficiently.
Two signals analysed separately:
PartSignalColumnPurposeAWhen customers bookbooking_hourWhatsApp responsiveness, promotionsBWhen collections happencollection_hourRider allocation, slot planning
Key analyses:

Hourly booking distribution (full 24h)
Time-of-day bucket breakdown
Day-of-week × hour heatmaps (booking & collection)
Monthly trend with school holiday / festive highlights
8-week demand forecast using Holt-Winters Exponential Smoothing
Delivery slot demand + day-of-week breakdown
Rider allocation recommendation by slot (standard / Friday / festive)

Key insight generated:

Two booking peaks: 8–10am and 8–10pm (post-work). Customers book at night but collection happens next working day. The 12:00–16:00 delivery slot carries ~43% of all deliveries.

Decisions supported:

Keep WhatsApp active and responsive during 8–10pm window
Add +1 rider on Fridays (highest demand day)
Cap the 12:00–16:00 slot and overflow to adjacent slots


⚙️ Setup & Running the Notebooks
Requirements
bashpip install pandas numpy matplotlib seaborn scikit-learn statsmodels folium plotly
Steps

Clone or download this project folder
Place astoria_orders_v2.csv in the same directory as the notebooks
Open notebooks in Jupyter Notebook, JupyterLab, or Google Colab
Run all cells top to bottom

Google Colab (quick start)
python# Upload the CSV first, then run:
from google.colab import files
files.upload()  # select astoria_orders_v2.csv

🏪 Business Context
Astoria Cleaning Services is a Singapore-based laundry and dry-cleaning company offering:

Standard, express (same-day / next-day / 3-hour) cleaning
Specialist care for delicate items (leather, feathered, curtains, carpets)
Free pickup and delivery for orders ≥ $40
Collection: Mon–Sat, 9am–5pm (closed Sundays)
Delivery slots: 09:00–13:00 · 12:00–16:00 · 15:00–18:00
Contact: WhatsApp 8338 5131

Pricing highlights:

Standard garments: $9–$20
Premium / delicate items: $45–$120+ with +$4 surcharge
Express services: 2×–3× base rate
Long processing items: Curtains, carpets, leather/suede — 7–14 days


📌 Notes

All data is synthetic and generated for analytical purposes only
Postal codes and coordinates are representative of Singapore zones
Processing times may vary during peak seasons (school holidays & festive periods)
Sunday is excluded from all analyses (Astoria is closed)