import { ToastAndroid } from 'react-native';

  const showToast = (msg: string) =>{ToastAndroid.show(msg, ToastAndroid.SHORT)}

export {showToast};