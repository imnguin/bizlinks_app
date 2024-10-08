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
        return value;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
    }
};

export {
    setDataStore,
    getDataStore
}