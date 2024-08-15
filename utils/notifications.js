// /utils/notifications.js

// Function to create a notification element
const createNotificationElement = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = '#fff';
    notification.style.zIndex = '1000';

    // Style based on type
    if (type === 'success') {
      notification.style.backgroundColor = 'green';
    } else if (type === 'error') {
      notification.style.backgroundColor = 'red';
    } else {
      notification.style.backgroundColor = 'blue';
    }

    document.body.appendChild(notification);

    // Automatically remove notification after a certain time
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  // Show a notification with type
  export const showNotification = (message, type = 'info') => {
    createNotificationElement(message, type);
  };

  // Hide all notifications (if needed)
  export const hideNotification = () => {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => notification.remove());
  };
