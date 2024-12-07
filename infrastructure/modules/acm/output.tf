output "acm_arn" {
    value = aws_acm_certificate.vdn_certificate.arn
}

output "domain_validation_options" {
  value = aws_acm_certificate.vdn_certificate.domain_validation_options
}