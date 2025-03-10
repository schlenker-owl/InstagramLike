import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import { colors, typography, spacing } from '../../styles/theme';

const Button = ({
  title,
  onPress,
  type = 'primary', // primary, secondary, text
  size = 'medium',  // small, medium, large
  disabled = false,
  loading = false,
  style = {},
  textStyle = {},
}) => {
  const getButtonStyles = () => {
    let buttonStyles = [styles.button];
    
    // Button type
    if (type === 'primary') {
      buttonStyles.push(styles.primaryButton);
    } else if (type === 'secondary') {
      buttonStyles.push(styles.secondaryButton);
    } else if (type === 'text') {
      buttonStyles.push(styles.textButton);
    }
    
    // Button size
    if (size === 'small') {
      buttonStyles.push(styles.smallButton);
    } else if (size === 'large') {
      buttonStyles.push(styles.largeButton);
    }
    
    // Disabled state
    if (disabled || loading) {
      buttonStyles.push(styles.disabledButton);
    }
    
    return buttonStyles;
  };
  
  const getTextStyles = () => {
    let textStyles = [styles.buttonText];
    
    if (type === 'secondary') {
      textStyles.push(styles.secondaryText);
    } else if (type === 'text') {
      textStyles.push(styles.textButtonText);
    }
    
    if (size === 'small') {
      textStyles.push(styles.smallText);
    } else if (size === 'large') {
      textStyles.push(styles.largeText);
    }
    
    if (disabled || loading) {
      textStyles.push(styles.disabledText);
    }
    
    return textStyles;
  };
  
  return (
    <TouchableOpacity
      style={[...getButtonStyles(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={type === 'primary' ? colors.white : colors.primary} 
          size="small" 
        />
      ) : (
        <Text style={[...getTextStyles(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textButton: {
    backgroundColor: colors.transparent,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  smallButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  largeButton: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.white,
  },
  secondaryText: {
    color: colors.primary,
  },
  textButtonText: {
    color: colors.primary,
  },
  smallText: {
    fontSize: typography.fontSize.sm,
  },
  largeText: {
    fontSize: typography.fontSize.lg,
  },
  disabledText: {
    color: colors.white,
  },
});

export default Button;