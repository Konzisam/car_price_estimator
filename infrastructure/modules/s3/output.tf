output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.car_predictor_frontend.website_endpoint
}

output "bucket_name" {
  value = aws_s3_bucket.car_predictor_frontend.bucket
}