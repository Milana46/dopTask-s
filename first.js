//depemdency inversion

 class User{

    sendMessage(message){
        console.log("Метод необходимо реализовать!!!")
    }
}

class EmailService extends User {
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
 }
 
 class Notification {
    constructor() {
        this.emailService = new EmailService();
    }
 
    notify(message) {
        this.emailService.sendMessage(message);
    }
 }
 

 const emailService=new EmailService();
 const notif=new Notification();
 notif.notify("Важное сообщение")
 
 
 