import json
import pickle
import numpy as np

model = pickle.load(open('regression_model.pkl', 'rb'))

def process_fuel_type(fuel: str):
    """
    Processfuel type input and return a one-hot encoded representation.
    """
    fuel_types = {
        'Diesel': [1, 0, 0, 0, 0, 0],
        'Electric': [0, 1, 0, 0, 0, 0],
        'Electric/Diesel': [0, 0, 1, 0, 0, 0],
        'Electric/Gasoline': [0, 0, 0, 1, 0, 0],
        'Gasoline': [0, 0, 0, 0, 1, 0],
        'LPG': [0, 0, 0, 0, 0, 1],
    }
    return fuel_types.get(fuel, [0, 0, 0, 0, 0, 0])  

def process_offer_type(offer_type: str):
    """
    Process offer type input and returns one-hot encoded values.
    """
    offer_types = {
        'Used': [1, 0, 0],
        'Pre_registered': [0, 1, 0],
        'Employee_car': [0, 0, 1],
    }
    return offer_types.get(offer_type, [0, 0, 0])  

def process_gear_type(gear: str):
    """
    Processtransmission gear type and return one-hot encoded values.
    """
    gears = {
        'Manual': [1, 0],
        'Semi_Automatic': [0, 1],
    }
    return gears.get(gear, [0, 0])  

def preprocess_input_data(data):
    year = int(data['Year'])
    hp = float(data['Horse_power'])
    mileage = int(data['mileage'])
    fuel = data['Fuel_Type']
    offer_type = data['offerType']
    gear = data['Transmission']

    age = 2024 - year

    fuel_encoding = process_fuel_type(fuel)
    offer_type_encoding = process_offer_type(offer_type)
    gear_encoding = process_gear_type(gear)

    features = [
        mileage, hp, age, 
        *fuel_encoding, 
        *gear_encoding, 
        *offer_type_encoding
    ]

    return features

def predict_car_value(features):
    prediction = model.predict([features])
    return round(prediction[0], 2)

def lambda_handler(event, context):
    features = preprocess_input_data(event)
    predicted_value = predict_car_value(features)
    
    return predicted_value
    
    # if predicted_value > 0:
    #     return predicted_value
    # else:
    #     return "The car value is below 0"

     