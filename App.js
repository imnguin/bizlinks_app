import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import GlobalLoader from './src/views/Loader';
import { requestNotificationPermissions, configureNotificationHandler } from './src/services/notification';
import { useEffect } from 'react';
export default function App() {
  useEffect(() => {
    // Cấp quyền thông báo và cấu hình 1 lần khi ứng dụng khởi chạy
    requestNotificationPermissions();
    configureNotificationHandler();
  }, []);

  return (
    <Provider store={store}>
      <GlobalLoader />
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
