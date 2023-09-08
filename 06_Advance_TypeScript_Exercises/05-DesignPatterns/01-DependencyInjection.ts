
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