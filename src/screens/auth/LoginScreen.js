import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { colors, typography, spacing } from '../../styles/theme';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        // Navigate to main app if successful
        // For now, just navigate to the main tab navigator
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      }, 1500);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/instagram-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          
          <View style={styles.formContainer}>
            <Input
              placeholder="Phone number, username or email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              error={errors.email}
              leftIcon="email"
            />
            
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={errors.password}
              leftIcon="lock"
            />
            
            <Button
              title="Log In"
              onPress={handleLogin}
              loading={loading}
              disabled={loading}
              style={styles.loginButton}
            />
            
            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotPasswordContainer}
            >
              <Text style={styles.forgotPasswordText}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.signupLink}>Sign up.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logo: {
    width: 200,
    height: 70,
  },
  formContainer: {
    marginBottom: spacing.xl,
  },
  loginButton: {
    marginTop: spacing.md,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  signupText: {
    color: colors.mediumGray,
    fontSize: typography.fontSize.md,
  },
  signupLink: {
    color: colors.primary,
    fontWeight: typography.fontWeight.semiBold,
    marginLeft: spacing.xs,
    fontSize: typography.fontSize.md,
  },
});

export default LoginScreen;