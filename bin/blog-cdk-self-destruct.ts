#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BlogCdkSelfDestructStack } from '../lib/blog-cdk-self-destruct-stack';

const app = new cdk.App();
new BlogCdkSelfDestructStack(app, 'BlogCdkSelfDestructStack', {
  
});