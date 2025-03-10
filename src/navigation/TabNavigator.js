import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import CreateScreen from '../screens/create/CreateScreen';
import ActivityScreen from '../screens/activity/ActivityScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#262626',
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: '#DBDBDB',
          elevation: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'home' : 'home-outline'} 
              color={color} 
              size={28} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'magnify' : 'magnify'} 
              color={color} 
              size={28} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={CreateScreen} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'plus-box' : 'plus-box-outline'} 
              color={color} 
              size={28} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Activity" 
        component={ActivityScreen} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? 'heart' : 'heart-outline'} 
              color={color} 
              size={28} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.profileActive : styles.profile}>
              {focused ? (
                <View style={styles.profileActiveInner} />
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EFEFEF',
  },
  profileActive: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileActiveInner: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#EFEFEF',
  },
});

export default TabNavigator;