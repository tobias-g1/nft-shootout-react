import { notification } from "antd";

const NotificationService = {
  sendNotification: function (type: string, title: string, text: string) {
    notification[type]({
      message: title,
      description: text,
    });
  },
  
};

export default NotificationService;
