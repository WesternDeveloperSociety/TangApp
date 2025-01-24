import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
export default function TabLayout() {

  // apply styles to Tabs.Screen directly if needed. 
  return (
    <Tabs 
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#ffd33d',
      tabBarStyle: {
        backgroundColor: 'black'
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <Image 
            source={require('../../assets/images/dashboard.png')}/>
          ) 
        }}
      />
      <Tabs.Screen
      name="robots"
      options={{
        title: 'Robots',
        tabBarIcon: () => (
          <Image 
            source={require('../../assets/images/robot.png')}
          />
        )
      }}
      />
      <Tabs.Screen 
      name="settings"
      options={{
        title: "Settings",
        tabBarIcon: () => (
          <Image 
            source={require('../../assets/images/settings.png')}
          />
        )
      }}
      />
    </Tabs>
  ); 
}
