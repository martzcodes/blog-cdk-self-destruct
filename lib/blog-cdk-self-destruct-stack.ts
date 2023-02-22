import * as cdk from "aws-cdk-lib";
import { Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import { SelfDestruct } from "./self-destruct";

export interface BlogCdkSelfDestructStackProps extends cdk.StackProps {
  cicd?: boolean;
  developer?: boolean;
  production?: boolean;
}
export class BlogCdkSelfDestructStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BlogCdkSelfDestructStackProps) {
    super(scope, id, props);
    const { cicd, developer, production } = props;

    if (developer && production) {
      throw new Error("Don't use developer stacks in production");
    }

    if (!production && (developer || cicd)) {
      new SelfDestruct(this, `SelfDestruct`, {
        duration: Duration.minutes(3),
      });
    }
  }
}
