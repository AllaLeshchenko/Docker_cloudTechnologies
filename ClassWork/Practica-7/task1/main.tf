# Определяем провайдера - в данном случае AWS
provider "aws" {
    # Регион, в котором будут создаваться ресурсы
    region = "us-east-1"
}

# Ресурс: создаем новый S3-бакет
resource "aws_s3_bucket" "my_bucket" {
    # Имя бакета должно быть уникальным в глобальном масштабе AWS
    bucket = "131224-wdm-leshchenko-bucket"
}