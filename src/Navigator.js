import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const LoginOrProfileRouter = () =>
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Auth' component={Login} />
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>


export default props => {
  return (
    <>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'home'
          } else if (route.name === 'Add') {
            iconName = 'camera'
          } else if (route.name === 'Profile') {
            iconName = 'user'
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#47ddff",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            display: "flex"
          },
          null,
        ]
      })} initialRouteName="Feed">
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Add" component={AddPhoto} />
        <Tab.Screen name="Profile" component={LoginOrProfileRouter} />
      </Tab.Navigator>
    </>
  );
}