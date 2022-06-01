import Toast from 'react-native-toast-message';


export const ToastNotification = data => {
    Toast.show({
      type: data.type,
      text1: data.text1,
      text2: data.text2
    });
}