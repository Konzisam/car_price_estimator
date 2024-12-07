terraform {
  backend "s3" {
    bucket = "car-predictor"
    key = "backend/terraform.tfstate"
    region = "eu-central-1"
    dynamodb_table = "terraform-lock"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.region
}

# ACM provider for us-east-1 
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

module "bucket" {
    source = "../modules/s3"
    bucket_name = "${var.business_name}-website-${var.stage}"
    default_document = var.default_document
    error_document = var.error_document
}

module "acm-module" {
  source = "../modules/acm"
  domain = var.domain_name
  additional_acm_domain_name = var.additional_acm_domain_name

    providers = {
    aws = aws.us_east_1
  }
}


module "cloudfront" {
  source                 = "../modules/cloudfront"
  website_endpoint       = module.bucket.website_endpoint
  bucket_name            = module.bucket.bucket_name
  acm_certificate_arn    = module.acm-module.acm_arn
  additional_domain_name = var.additional_domain_name
  default_document       = var.default_document
  error_document         = var.error_document
}

module "route53" {
  source                            = "../modules/route53"
  cloudfront_domain_name            = module.cloudfront.cloudfront_domain_name
  cloudfront_hosted_zone_id         = module.cloudfront.cloudfront_hosted_zone_id
  cloudfront_additional_domain_name = var.additional_domain_name
  domain_validation_options         = module.acm-module.domain_validation_options
}

# resource "null_resource" "sync_s3_after_apply" {

#   depends_on = [module.bucket]

#   provisioner "local-exec" {
#     command     = "aws s3 sync /c/Users/konzi/projects/car_price_estimator_germany/test s3://${module.bucket.bucket_name}/"
#     interpreter = ["bash", "-c"]
#   }
# }