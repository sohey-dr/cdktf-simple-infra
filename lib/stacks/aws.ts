import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { AwsProvider } from "../../.gen/providers/aws";
import { S3BucketStack } from "../constructs/storage";

export class AwsMyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "ap-northeast-1",
    });

    new S3BucketStack(this, "my-bucket");
  }
}
