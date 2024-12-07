### Car Price Estimator with API Gateway and Lambda
In this project, I worked with a dataset of car prices to explore the data and understand what factors affect pricing. After analyzing the data, I built a model to predict car prices. The model was then packaged and deployed, making it available for use.

### Key Features:

- **Data Analysis:** Analyzed historical car price data, identifying key features such as make, model, year, and mileage.
- **Model Training:** A linear regression model was trained using the cleaned dataa
- **containerize Model:** Package the model using docker
- **ECR Registry:** Store the Docker image for the model to facilitate easy access from Lambda functions.
- **API Gateway:** To expose a RESTful API. 
- **Lambda Function:** The Lambda function fetches the model from Amazon ECR, processes input data, and returns the price prediction.
- **Authentication:** AWS Cognito was used for user authentication, restricting API access to authorized users only.
- **React Frontend:** user interface for users to interact with the model and view predictions.
- **S3 Hosting:** The React application is built into static files and hosted on S3.
- **CloudFront:** to distribute the static website globally with low latency and high performance.
- **Route 53:** handle domain name management, routing traffic to the CloudFront distribution.
- **ACM:** provision an SSL certificate for secure HTTPS access to the static website.


One thing to note is that the data source is limited to **Germany**.

Here is a snapshot of the app.

![app](https://github.com/Konzisam/car_price_estimator_germany/blob/main/app.png))

