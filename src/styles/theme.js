export const colors = {
    primary: '#0095F6',         // Instagram blue
    background: '#FFFFFF',      // White background
    black: '#262626',           // Instagram black
    lightGray: '#FAFAFA',       // Light background
    mediumGray: '#8E8E8E',      // Medium gray for secondary text
    separator: '#DBDBDB',       // Light gray for separators
    error: '#ED4956',           // Red for errors
    white: '#FFFFFF',           // White
    transparent: 'transparent',
  };
  
  export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  };
  
  export const typography = {
    fontFamily: {
      regular: 'System',        // Default iOS system font
      medium: 'System',         // With medium weight
      bold: 'System',           // With bold weight
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,     // Default text size
      lg: 16,
      xl: 18,
      xxl: 22,
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
  };
  
  export const elevations = {
    small: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    medium: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
    },
  };
  
  export default {
    colors,
    spacing,
    typography,
    elevations,
  };