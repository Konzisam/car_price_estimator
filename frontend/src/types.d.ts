export interface InputData {
    mileage: number | '';
    Horse_power: number | '';
    Year: number | '';
    Fuel_Type: 'Diesel' | 'Electric' | 'Electric/Diesel' | 'Electric/Gasoline' | 'Gasoline' | 'LPG';
    offerType: 'Used' | 'Pre_registered' | 'Employee_car';
    Transmission: 'Manual' | 'Semi_Automatic';
  }

  export interface PredictionResponse {
    predictionValue: number; 
  }