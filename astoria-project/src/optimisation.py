import pandas as pd
from sklearn.cluster import KMeans

df = pd.read_csv("../data/synthetic_orders.csv")

coords = df[["lat", "lon"]]

kmeans = KMeans(n_clusters=5, random_state=42)
df["cluster"] = kmeans.fit_predict(coords)

print(df[["order_id", "cluster"]].head())