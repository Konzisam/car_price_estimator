import os
import requests
from dotenv import load_dotenv
load_dotenv()

# url = 'http://localhost:8080/2015-03-31/functions/function/invocations'
url = os.getenv('TEST_URL')

event = {
    "mileage": 50000,
    "Horse_power": 100,
    "Year": 2017,
    "Fuel_Type": "Diesel",
    "offerType": "Used",
    "Transmission": "Manual"
}

response = requests.post(url, json=event)
print(response.json())

