import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function ScreenA() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'plum' }}>
      <View style={{ marginLeft: 260, alignItems: 'center', backgroundColor: 'plum', marginBottom: 10 }}>
        <Button title="See Related Item" color='plum' onPress={() => navigation.navigate('Details')} />
      </View>
      <Image source={require('./assets/bouqet1.jpg')} style={{ width: 370, height: 360 }} />
      <View style={{ backgroundColor: 'plum', padding: 10, marginTop: 10}}>
        <Text color='white'>SUNFLOWER BOUQUET</Text>
      </View>
    </View>
  );
}

function ScreenB() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellowgreen'}}>
      <View style={{ marginLeft: 230, alignItems: 'center', backgroundColor: 'yellowgreen' }}>
        <Button title="See other Scenary" color="yellowgreen" onPress={() => navigation.navigate('Garden')} />
      </View>
      <Image source={require('./assets/garden3.jpg')} style={{ width: 380, height: 360 }} />
      <View style={{ backgroundColor: 'yellowgreen', padding: 10, marginTop: 10}}>
        <Text>GARDEN SCENARY</Text>
      </View>
    </View>
  );
}

function ScreenC() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightblue' }}>
      <View style={{ marginLeft: 190, alignItems: 'center', backgroundColor: 'pink' }}>
        <Button title="See other Destination" color="lightblue" onPress={() => navigation.navigate('Travel')} />
      </View>
      <Image source={require('./assets/moraine_lake.jpg')} style={{ width:370, height: 360}} />
      <View style={{ backgroundColor: 'lightblue', padding: 10, marginTop: 10 }}>
        <Text>TRAVEL DESTINATION</Text>
      </View>
    </View>
  );
}

function ScreenD() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'ivory' }}>
      <View style={{ marginLeft: 215, alignItems: 'center', backgroundColor: 'white',  marginBottom: 10 }}>
        <Button title="See Related Photos" color="pink" onPress={() => navigation.navigate('Seleno')} />
      </View>
      <Image source={require('./assets/selenop.jpg')} style={{ width: 360, height: 360}} />
      <View style={{ backgroundColor: 'white', padding: 10, marginTop: 10}}>
        <Text>THE MOON LOVER</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const screens = [
  { name: 'BOUQUET', component: ScreenA },
  { name: 'GARDEN SCENARY', component: ScreenB },
  { name: 'TRAVEL DESTINATION', component: ScreenC },
  { name: 'SELENOPHILE', component: ScreenD },
];

export default function TabPanels() {
  return (
    <Tab.Navigator>
      {screens.map((screen, index) => (
        <Tab.Screen key={index} name={screen.name} component={screen.component} />
      ))}
    </Tab.Navigator>
  );
}
