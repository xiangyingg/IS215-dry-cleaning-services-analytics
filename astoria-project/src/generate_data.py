import pandas as pd
import numpy as np

def generate_data(n=500):
    np.random.seed(42)

    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    slots = {
        "9-1": (9, 13),
        "12-4": (12, 16),
        "3-6": (15, 18)
    }

    data = pd.DataFrame({
        "order_id": range(1, n+1),
        "day": np.random.choice(days, n),
        "slot": np.random.choice(list(slots.keys()), n),
        "zone": np.random.choice(["North", "South", "East", "West", "Central"], n),
        "lat": np.random.uniform(1.25, 1.45, n),
        "lon": np.random.uniform(103.7, 103.9, n),
        "garment_type": np.random.choice(
            ["Normal", "Delicate", "Premium"], n, p=[0.6, 0.25, 0.15]
        )
    })

    data["start_hour"] = data["slot"].apply(lambda x: slots[x][0])
    data["end_hour"] = data["slot"].apply(lambda x: slots[x][1])

    # Apply business constraints
    data = data[data["day"] != "Sun"]
    data = data[data["start_hour"] < 17]

    return data


if __name__ == "__main__":
    df = generate_data()
    df.to_csv("../data/synthetic_orders.csv", index=False)
    print("✅ Data generated!")