output "cloudfront_domain_name" {
    value = aws_cloudfront_distribution.car_predictor_cloudfront.domain_name  
}

output "cloudfront_hosted_zone_id" {
  value = aws_cloudfront_distribution.car_predictor_cloudfront.hosted_zone_id
}