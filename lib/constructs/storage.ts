import { S3Bucket } from "../../.gen/providers/aws/s3";
import { Construct } from "constructs";

export class S3BucketStack extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new S3Bucket(this, "my-bucket", {
      bucket: name,
    });
  }
}
