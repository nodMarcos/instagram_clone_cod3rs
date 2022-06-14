
import { LogBox, View,   } from 'react-native';
import { useFonts } from '@use-expo/font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig'
import Axios from 'axios';

const store = storeConfig()

Axios.defaults.baseURL = 'https://instaclone-86ac9-default-rtdb.firebaseio.com/'

const Redux = () => (
  <Provider store={store}>
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  </Provider>
)

export default function App() {
  let [fontsLoaded] = useFonts({
    'shelter': require('./assets/fonts/shelter.otf'),
  });

  LogBox.ignoreAllLogs();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Redux />
}
