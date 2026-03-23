import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("../data/synthetic_orders.csv")

# Demand by slot
slot_demand = df.groupby("slot").size()

print(slot_demand)

slot_demand.plot(kind="bar")
plt.title("Demand by Time Slot")
plt.show()

# Detect problematic orders
problem_orders = df[df["end_hour"] > 17]

print("⚠️ Problem Orders:", len(problem_orders))