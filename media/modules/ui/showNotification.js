export function showNotification(options) {
    const { message, type = 'info' } = options;

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    const styles = {
        success: { background: '#4caf50', color: 'white' },
        error: { background: '#f44336', color: 'white' },
        info: { background: '#2196F3', color: 'white' }
    };

    const style = styles[type] || styles.info;
    Object.assign(notification.style, {
        position: 'fixed',
        top: '70px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '4px',
        backgroundColor: style.background,
        color: style.color,
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        zIndex: '10001',
        animation: 'slideIn 0.3s ease-out'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
