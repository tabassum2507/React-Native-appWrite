import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Explore',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
    //       ),
    //     }}
    //   />
    // </Tabs>
    <View style={styles.container}>
      <Text>PootLayout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})
