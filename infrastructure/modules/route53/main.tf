data "aws_route53_zone" "hosted_zone" {
    name = var.hosted_zone
    private_zone = false  
}

resource "aws_route53_record" "domain_verification" {
    for_each = {
      for d in var.domain_validation_options : d.domain_name => {
        name = d.resource_record_name
        record = d.resource_record_value
        type = d.resource_record_type
      } 
    }
  
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  type = each.value.type
  name = each.value.name
  records = [each.value.record]
  ttl = 60
  allow_overwrite = true
}


resource "aws_route53_record" "website_dns_record" {
  zone_id = data.aws_route53_zone.hosted_zone.id
  name    = var.cloudfront_additional_domain_name
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_hosted_zone_id
    evaluate_target_health = false
  }
}