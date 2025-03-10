import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens - Auth
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

// Screens - Main App
import FeedScreen from '../screens/feed/FeedScreen';
import SearchScreen from '../screens/search/SearchScreen';
import CameraScreen from '../screens/camera/CameraScreen';
import NotificationsScreen from '../screens/notifications/NotificationsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

// Other screens
import CommentsScreen from '../screens/feed/CommentsScreen';
import UserProfileScreen from '../screens/profile/UserProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import StoryViewScreen from '../screens/feed/StoryViewScreen';
import DirectMessagesScreen from '../screens/notifications/DirectMessagesScreen';
import PostCreateScreen from '../screens/camera/PostCreateScreen';

import { colors } from '../styles/theme';

// Stack navigators
const AuthStack = createStackNavigator();
const FeedStack = createStackNavigator();
const SearchStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CameraStack = createStackNavigator();

// Tab navigator
const MainTab = createBottomTabNavigator();

// Auth navigator
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
};

// Feed Stack
const FeedStackNavigator = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen 
        name="Feed" 
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <FeedStack.Screen name="Comments" component={CommentsScreen} />
      <FeedStack.Screen 
        name="StoryView" 
        component={StoryViewScreen}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <FeedStack.Screen name="UserProfile" component={UserProfileScreen} />
      <FeedStack.Screen 
        name="DirectMessages" 
        component={DirectMessagesScreen}
        options={{ title: 'Messages' }}
      />
    </FeedStack.Navigator>
  );
};

// Search Stack
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen 
        name="Search" 
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen name="UserProfile" component={UserProfileScreen} />
    </SearchStack.Navigator>
  );
};

// Camera Stack
const CameraStackNavigator = () => {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <CameraStack.Screen 
        name="PostCreate" 
        component={PostCreateScreen}
        options={{ title: 'New Post' }}
      />
    </CameraStack.Navigator>
  );
};

// Notifications Stack
const NotificationsStackNavigator = () => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen 
        name="Notifications" 
        component={NotificationsScreen}
        options={{ title: 'Activity' }}
      />
      <NotificationsStack.Screen name="UserProfile" component={UserProfileScreen} />
    </NotificationsStack.Navigator>
  );
};

// Profile Stack
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen 
        name="EditProfile" 
        component={EditProfileScreen}
        options={{ title: 'Edit Profile' }}
      />
    </ProfileStack.Navigator>
  );
};

// Main Tab Navigator
const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'FeedTab') {
            iconName = focused ? 'home' : 'home-outlined';
          } else if (route.name === 'SearchTab') {
            iconName = 'search';
          } else if (route.name === 'CameraTab') {
            iconName = 'add-box';
          } else if (route.name === 'NotificationsTab') {
            iconName = focused ? 'favorite' : 'favorite-border';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.mediumGray,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <MainTab.Screen name="FeedTab" component={FeedStackNavigator} />
      <MainTab.Screen name="SearchTab" component={SearchStackNavigator} />
      <MainTab.Screen name="CameraTab" component={CameraStackNavigator} />
      <MainTab.Screen name="NotificationsTab" component={NotificationsStackNavigator} />
      <MainTab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </MainTab.Navigator>
  );
};

// Main Navigator
const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // TODO: Check authentication status
  useEffect(() => {
    // Simulate checking auth state
    setTimeout(() => {
      setIsLoggedIn(false);
    }, 1000);
  }, []);
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? <MainTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;