# AWS Development Environment Setup

> This guide will help you set up your development environment to work with AWS services, including DynamoDB and Lambda Functions, using TypeScript.

## Prerequisites

* Node.js (v14.x or later)

* AWS Account

## Step 1: Install AWS CLI

First, you'll need to install the AWS Command Line Interface (CLI). Follow the instructions for your operating system on the official AWS CLI installation page.

## Step 2: Configure AWS CLI

Once the AWS CLI is installed, you'll need to configure it with your AWS credentials. Open a terminal and run:

`aws configure`

You'll be prompted to enter your `AWS Access Key ID`, `Secret Access Key`, `default region`, and `default output format`. You can find these details in your AWS Management Console.

## Step 3: Install AWS SDK

You'll need the AWS SDK to interact with AWS services programmatically. In your project directory, run:

`npm install aws-sdk`

## Step 4: Install TypeScript and AWS SDK Type Definitions

Since you'll be working with TypeScript, you'll need to install TypeScript and the type definitions for the AWS SDK. Run:

`npm install typescript @types/node @types/aws-sdk`

## Step 5: Set Up Your TypeScript Project

Create a `tsconfig.json` file in your project directory with the following content:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```




