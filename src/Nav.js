import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginByPhone from './pages/login/LoginByPhone';
import LoginByAccount from './pages/login/LoginByAccount';
// import Register from './pages/login/Register';
import GetBackPassword from './pages/login/GetBackPassword';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='GetBackPassword'>
        <Stack.Screen name="LoginByPhone" component={LoginByPhone} />
        <Stack.Screen name="GetBackPassword" component={GetBackPassword} />
        <Stack.Screen name="LoginByAccount" component={LoginByAccount} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;