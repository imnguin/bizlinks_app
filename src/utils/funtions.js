import AsyncStorage from "@react-native-async-storage/async-storage";

const setDataStore = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log('Data stored successfully');
    } catch (error) {
        console.error('Error storing data:', error);
    }
}

const getDataStore = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
    }
};

const getNameInitials = (name) => {
    if (!name) return ''; // Kiểm tra chuỗi rỗng hoặc undefined
    const words = name.split(' '); // Tách chuỗi thành mảng từ
    const initials = words.map(word => word.charAt(0).toUpperCase()); // Lấy ký tự đầu tiên và chuyển thành chữ hoa
    return initials.join(''); // Ghép các ký tự đầu tiên lại
};

export {
    setDataStore,
    getDataStore,
    getNameInitials
}