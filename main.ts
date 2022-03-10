import { App } from "cdktf";
import { AwsMyStack } from "./lib/stacks/aws";

class MyStack extends App {
  constructor() {
    super();
    new AwsMyStack(this, "stage");
  }
}

const app = new MyStack();
app.synth();
