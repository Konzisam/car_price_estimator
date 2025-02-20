### Car Price Estimator with API Gateway and Lambda - ([Try it](https://github.com/Konzisam/car_price_estimator/))

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
- **Terrraform(Iac):** Automated the provisioning of cloud infrastructure, ensuring consistent and repeatable deployments.

One thing to note is that the dataset is limited to **Germany**.

### Background
The Car Price Estimator is designed to address the need for accurate and efficient pricing tools in the automotive industry, particularly tailored to the German market where. By leveraging machine learning and cloud-native architecture, it provides an end-to-end solution for predicting car prices based on various factors.

### Case Scenarios:
1. **Pricing and Transparency:** *Dealers*, *resellers*, *individual sellers*, *buyers* and *insurers* with a need to determine car values based on multiple factors like age, mileage, make, and model. The tool provides automated, data-driven price predictions and ensures transparency in transactions, supporting fair valuations for all stakeholders.
It also ensures the prices are aligned with market trends.
2. **Localized Market Focus:** Tailored specifically for the German market, the solution incorporates region-specific trends, ensuring highly accurate and relevant market prices.

### This architecture offers:
- **Accessibility and Availability:** Model is via an API and a user-friendly React frontend allows  users to interact with the tool effortlessly. Cloudfront ensures high availability.
- **Security:** Integration with AWS Cognito ensures that sensitive data remains secure, and avoids API misuse.
- **Scalability:** USing AWS Lambda and ECR ensures the application can handle fluctuating traffic with minimal 


Try out the app on [Here!](https://github.com/Konzisam/car_price_estimator/)


Here is an architechture diagram showcasing the complete workflow

![Funny Cat](https://github.com/Konzisam/car_price_estimator/blob/main/utils/architechture.gif)
