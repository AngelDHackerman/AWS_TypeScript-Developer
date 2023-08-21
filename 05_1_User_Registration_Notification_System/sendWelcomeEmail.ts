import * as AWS from 'aws-sdk'
AWS.config.update( { region: 'us-east-1'})

const ses = new AWS.SES()  // Amazon Simple Email Service
exports.handler = async (event: any) => {  // Define la función Lambda que se exporta como "handler". La función es asíncrona y toma un objeto event como entrada.
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
    await ses.sendEmail(params).promise();  // En este caso, await se utiliza para esperar a que la operación de envío de correo electrónico se complete antes de continuar con el código siguiente. 
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