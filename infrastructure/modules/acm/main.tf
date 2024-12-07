terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

resource "aws_acm_certificate" "vdn_certificate" {
  provider = aws.us_east_1
  domain_name = var.domain
  subject_alternative_names = [ var.additional_acm_domain_name ]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}