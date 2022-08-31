from flask import Flask, render_template, request
import jsonify
import requests
import pickle
import numpy as np
import sklearn
from sklearn.preprocessing import StandardScaler
app = Flask(__name__)
model = pickle.load(open('regression_model.pkl', 'rb'))
@app.route('/',methods=['GET'])
def Home():
    return render_template('index.html')


standard_to = StandardScaler()
@app.route("/predict", methods=['POST'])
def predict():
    #Fuel_Type_Diesel=0
    if request.method == 'POST':
        year = int(request.form['Year'])

        hp=float(request.form['Horse_power'])

        mileage=int(request.form['mileage'])

        fuel=request.form['Fuel_Type']
        fuel_Diesel=0
        fuel_Electric=0
        fuel_Electric_Diesel=0
        fuel_Electric_Gasoline=0
        fuel_Gasoline=0
        fuel_LPG=0
        if(fuel=='Diesel'):
            fuel_Diesel=1
        elif(fuel=='Electric'):
            fuel_Electric=1
        elif(fuel=='Electric/Diesel'):
            fuel_Electric_Diesel=1
        elif(fuel=='Electric/Gasoline'):
            fuel_Electric_Gasoline=1
        elif(fuel=='Gasoline'):
            fuel_Gasoline=1
        elif(fuel=='LPG'):
            fuel_LPG=1

        Age=2022-year

        offerType=request.form['offerType']
        offerType_Employee_car=0
        offerType_Pre_registered=0
        offerType_Used=0
        if(offerType=='Used'):
            offerType_Used=1
        elif(offerType=='Pre_registered'):
            offerType_Pre_registered=1
        elif(offerType=='"Employee_car"'):
            offerType_Employee_car=1

        gear=request.form['Transmission']
        gear_Semi_automatic=0
        gear_Manual=0
        if(gear=='Manual'):
            gear_Manual=1
        elif(gear=='Semi_Automatic'):
            gear_Semi_automatic=1

        prediction=model.predict([[mileage,hp,Age,fuel_Diesel,fuel_Electric,fuel_Electric_Diesel,
            fuel_Electric_Gasoline,fuel_Gasoline,fuel_LPG,gear_Manual,gear_Semi_automatic,
            offerType_Employee_car,offerType_Pre_registered,offerType_Used]])
        pred=round(prediction[0],2)
        if pred<0:
            return render_template('index.html',prediction_texts="The car value is below 0")
        else:
            return render_template('index.html',prediction_text="Car valued at {}".format(pred))
    else:
        return render_template('index.html')

if __name__=="__main__":
    app.run(debug=True)