import * as Notifications from 'expo-notifications';

// Cấp quyền cho thông báo
export const requestNotificationPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
        alert('Quyền thông báo không được cấp!');
    }
};

// Hiển thị thông báo cục bộ
export const showNotification = async (title, body) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: body,
        },
        trigger: null, // Gửi ngay lập tức
    });
};

// Cấu hình cách hiển thị thông báo
export const configureNotificationHandler = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        }),
    });
};
