import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native'
import Feed from './src/screens/Feed';
import Navigator from './src/Navigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    'shelter': require('./assets/fonts/shelter.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  )

}
