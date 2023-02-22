import * as cdk from "aws-cdk-lib";
import { Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import { SelfDestruct } from "./self-destruct";

export class BlogCdkSelfDestructStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SelfDestruct(this, `SelfDestruct`, {
      duration: Duration.minutes(3),
    });
  }
}
