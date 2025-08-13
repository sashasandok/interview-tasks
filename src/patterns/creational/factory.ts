interface INotification {
  send(message: string): void;
}

class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class PushNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class NotificationFactory {
  static createNotification(type: string): INotification {
    switch (type) {
      case "email":
        return new EmailNotification();

      case "sms":
        return new SMSNotification();

      case "push":
        return new PushNotification();

      default:
        throw new Error("Invalid notification type");
    }
  }
}

const notificationType = "email";
const notification = NotificationFactory.createNotification(notificationType);
notification.send("Your order has been c=shipped!");
