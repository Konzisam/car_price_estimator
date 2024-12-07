FROM public.ecr.aws/lambda/python:3.9

RUN pip install numpy scikit-learn==1.5.2

COPY ["main.py", "regression_model.pkl", "./"]

CMD [ "main.lambda_handler" ]

