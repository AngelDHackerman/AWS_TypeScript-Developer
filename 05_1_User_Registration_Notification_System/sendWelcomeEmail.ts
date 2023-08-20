import * as AWS from 'aws-sdk'
AWS.config.update( { region: 'us-east-1'})

const ses = new AWS.SES()  // Amazon Simple Email Service
exports.handler = async (event: any) => {
  const { username, email } = event.detail;

  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: `Welcome, ${username}! Thanks for registering.`,
        },
      },
      Subject: {
        Data: 'Welcome to Our Platform',
      },
    },
    Source: 'XXXXXXXX@mail.com'
  }

  try{ 
    await ses.sendEmail(params).promise();
    return { 
      statusCode: 200,
      body: JSON.stringify('Email sent successfully!')
    }
  } catch (error) { 
    console.error('Error sending email: ', error)
    return { 
      statusCode: 500,
      body: JSON.stringify('Error sending email')
    }
  }
}