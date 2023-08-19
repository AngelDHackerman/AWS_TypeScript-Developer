// This code will create a DynamoDB table with the name "Users_Registration_01"
// With 2 parameters: "username" and "email" both are string type

import * as AWS from 'aws-sdk'
AWS.config.update({ region: 'us-east-1' })

const dynamoDB = new AWS.DynamoDB()

// Parameters of our DynamoDb table
const params = { 
  TableName: 'Users_Registration_01',
  KeySchema: [
    { AttributeName: 'username', KeyType: 'HASH' }, // Partition Key
    { AttributeName: 'email', KeyType: 'RANGE' },  // Range (sort) Key
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

// Creating the DynamoDB table in AWS
// The use of 2 in this context is purely to improve the readability of the output. 
// If you're printing the error to the console and want to quickly understand its structure, having it well-formatted with indents can be very helpful. 
// If you omitted this argument, the JSON string would not have any extra spaces, and would be harder to read.
dynamoDB.createTable(params, (err, data) => { 
  if (err) {
    console.error('Unable to create table. Error:', JSON.stringify(err, null, 2))
  } else { 
    console.log('Table created successfully:', JSON.stringify(data, null, 2))
  }
})