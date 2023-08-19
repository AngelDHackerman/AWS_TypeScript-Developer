// This is a Lambda function was created to handle user registration and store the data in the DynamoDB table.

import * as AWS from 'aws-sdk'
AWS.config.update({ region: 'us-east-1' })

const dynamoDB = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event: any) => { 
  const { username, email } = event;

  const params = { 
    TableName: 'Users_Registration_01', 
    Item: { 
      username,
      email,
    },
  }

  try { 
    await dynamoDB.put(params).promise()
    return { 
      statusCode: 200,
      body: JSON.stringify('User registered successfully!'),
    }
  } catch (error) { 
    console.error('Error registering user:', error)
    return { 
      statusCode: 500,
      body: JSON.stringify('Error registering user'),
    }
  }
}