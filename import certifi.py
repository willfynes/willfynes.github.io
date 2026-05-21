import certifi
import ssl
import urllib.request

print("Using certifi at:", certifi.where())

# Try opening a URL using certifi's certs
ctx = ssl.create_default_context(cafile=certifi.where())
url = "https://pypi.org"
try:
    with urllib.request.urlopen(url, context=ctx) as response:
        print("SUCCESS: Able to reach", url)
except Exception as e:
    print("FAILED:", e)
