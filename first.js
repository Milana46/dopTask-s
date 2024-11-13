//single responsibility

class MessageSender {
    sendMessage(message) {
        throw new Error("Метод sendMessage должен быть реализован");
    }
}


class EmailService extends MessageSender {
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
}


class Notification {
    constructor(messageSender) {
        this.messageSender = messageSender;
    }

    notify(message) {
        this.messageSender.sendMessage(message);
    }
}

const emailService = new EmailService();
const notification = new Notification(emailService);
notification.notify("Важное сообщение");

