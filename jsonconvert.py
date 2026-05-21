import pandas as pd

# Load your CSV
df = pd.read_csv("/Users/willfynes/Desktop/almostdear.csv")

# Save as JSON
df.to_json("almostdear.json", orient="records", indent=2)
4