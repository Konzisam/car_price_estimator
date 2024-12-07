# create bucket
resource "aws_s3_bucket" "car_predictor_frontend" {
  bucket = var.bucket_name
  force_destroy = true
}

# Enable bucket versioning
resource "aws_s3_bucket_versioning" "car_predictor_frontend" {
  bucket = aws_s3_bucket.car_predictor_frontend.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_website_configuration" "car_predictor_frontend" {
  bucket = aws_s3_bucket.car_predictor_frontend.bucket
  index_document {
    suffix = var.default_document
  }

  error_document {
    key = var.error_document
  }
}

# Enable public access
resource "aws_s3_bucket_public_access_block" "car_predictor_frontend" {
  bucket = aws_s3_bucket.car_predictor_frontend.id
  block_public_acls = false
  block_public_policy = false
  restrict_public_buckets = false
  ignore_public_acls = false
}

# Grant anyone ability to GetOBject, for all objects
data "aws_iam_policy_document" "car_predictor_frontend" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    actions = ["s3:GetObject"]
    effect  = "Allow"
    resources = [
      "${aws_s3_bucket.car_predictor_frontend.arn}/*"
    ]
  }
}


resource "aws_s3_bucket_policy" "car_predictor_frontend" {
  bucket = aws_s3_bucket.car_predictor_frontend.id
  policy = data.aws_iam_policy_document.car_predictor_frontend.json
  depends_on = [aws_s3_bucket_public_access_block.car_predictor_frontend]
}