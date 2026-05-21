import pandas as pd

def load_messages(csv_path):
    try:
        df = pd.read_csv(csv_path)
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return None
    return df

def search_messages(df, keyword, window=5):
    if 'text' not in df.columns:
        print("CSV must contain a 'text' column.")
        return

    matches = df[df['text'].astype(str).str.contains(keyword, case=False, na=False)].index

    for idx in matches:
        start = max(idx - window, 0)
        end = min(idx + window + 1, len(df))
        print(f"\n--- Context for match at index {idx} ---")
        for i in range(start, end):
            prefix = "👉 " if i == idx else "   "
            print(f"{prefix}[{i}] {df.iloc[i]['text']}")
        print("-" * 40)

if __name__ == "__main__":
    csv_file = input("Enter path to your CSV file: ")
    keyword = input("Enter search keyword: ")

    df = load_messages(csv_file)
    if df is not None:
        search_messages(df, keyword)