# output "website_dns_record" {
#   value = module.route53.aws_route53_record.website_dns_record[*].fqdn
# }

output "website_dns_record" {
  value = module.route53.website_dns_record
}
