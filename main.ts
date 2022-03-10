import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, S3Bucket } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "ap-northeast-1",
    });

    // S3 bucket
    new S3Bucket(this, "my_bucket", {
      bucket: "s3-example.com",
      acl: "private",
    });
  }
}

const app = new App();
new MyStack(app, "aws");
app.synth();
