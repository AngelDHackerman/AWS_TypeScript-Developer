import * as AWS from 'aws-sdk'
AWS.config.update({ region: 'us-east-1' })

const dynamoDB = new AWS.DynamoDB()

const params = { 
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'username', KeyType: 'HASH' }, // Partition Key
  ],
  AttributeDefinitions: [
    { AttributeName: 'username', AttributeType: 'S' },
    { AttributeName: 'email', AttributeType: 'S' },
  ],
  ProvisionedThroughput: { 
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};