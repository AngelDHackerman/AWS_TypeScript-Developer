// 1. Interfaz para el servicio de notificaciones 
interface NotificationService { 
  sendNotification(message: string): void;
}

// 2. Implementaciones del servicio de notificaciones
class EmailNotificationService implements NotificationService { 
  sendNotification(message: string): void {
    console.log(`Sending email with message: ${message}`)
  }
}

class SMSNotificationService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending SMS with message: ${message}`)
  }
}

// 3. Clase User que depende de un servicio de notificaciones
class User { 
  private notificationService: NotificationService;

  constructor(notificationSerive: NotificationService) { 
    this.notificationService = notificationSerive;
  }

  activateAccount(): void { 
    this.notificationService.sendNotification('Your account has been activated!')
  }
}

// Uso de la inyeccion de dependencias
const emailService = new EmailNotificationService();
const userWithEmailService = new User(emailService);
userWithEmailService.activateAccount()  // output: Sending email with message: Your account has been activated!

const smsService = new SMSNotificationService();
const userWithSMSService = new User(smsService);
userWithSMSService.activateAccount();  // ouput: Sending sms with message: Your account has been activated! 