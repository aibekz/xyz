/**
 * OKLCH Color Utilities
 * 
 * This file provides utilities for working with OKLCH colors in your Next.js application.
 * OKLCH (OK Lightness Chroma Hue) is a perceptually uniform color space that provides
 * better color consistency across different displays and better accessibility.
 */

// OKLCH Color Palettes for both themes
export const darkColors = {
  // Base colors
  background: 'oklch(0.05 0 0)', // Very dark background
  surface: 'oklch(0.12 0 0)', // Dark surface
  surfaceHover: 'oklch(0.15 0 0)', // Hover state
  surfaceActive: 'oklch(0.18 0 0)', // Active state
  
  // Text colors
  textPrimary: 'oklch(0.95 0 0)', // High contrast text
  textSecondary: 'oklch(0.7 0 0)', // Medium contrast text
  textTertiary: 'oklch(0.5 0 0)', // Low contrast text
  
  // Border colors
  borderSubtle: 'oklch(0.25 0 0)', // Subtle borders
  borderMuted: 'oklch(0.35 0 0)', // Muted borders
  borderStrong: 'oklch(0.45 0 0)', // Strong borders
  
  // Primary colors (green theme)
  primary: 'oklch(0.7 0.15 140)', // Bright green
  primaryHover: 'oklch(0.75 0.15 140)', // Lighter green
  primaryActive: 'oklch(0.65 0.15 140)', // Darker green
  
  // Semantic colors
  success: 'oklch(0.7 0.15 140)', // Green
  successBg: 'oklch(0.15 0.05 140)', // Dark green background
  
  warning: 'oklch(0.8 0.15 60)', // Yellow
  warningBg: 'oklch(0.15 0.05 60)', // Dark yellow background
  
  error: 'oklch(0.65 0.2 20)', // Red
  errorBg: 'oklch(0.15 0.05 20)', // Dark red background
  
  info: 'oklch(0.7 0.15 240)', // Blue
  infoBg: 'oklch(0.15 0.05 240)', // Dark blue background
} as const;

export const lightColors = {
  // Base colors
  background: 'oklch(0.98 0 0)', // Very light background
  surface: 'oklch(0.95 0 0)', // Light surface
  surfaceHover: 'oklch(0.92 0 0)', // Hover state
  surfaceActive: 'oklch(0.9 0 0)', // Active state
  
  // Text colors
  textPrimary: 'oklch(0.1 0 0)', // High contrast text
  textSecondary: 'oklch(0.3 0 0)', // Medium contrast text
  textTertiary: 'oklch(0.5 0 0)', // Low contrast text
  
  // Border colors
  borderSubtle: 'oklch(0.8 0 0)', // Subtle borders
  borderMuted: 'oklch(0.7 0 0)', // Muted borders
  borderStrong: 'oklch(0.6 0 0)', // Strong borders
  
  // Primary colors (green theme)
  primary: 'oklch(0.5 0.15 140)', // Darker green for light theme
  primaryHover: 'oklch(0.45 0.15 140)', // Even darker green
  primaryActive: 'oklch(0.55 0.15 140)', // Lighter green
  
  // Semantic colors
  success: 'oklch(0.5 0.15 140)', // Green
  successBg: 'oklch(0.9 0.05 140)', // Light green background
  
  warning: 'oklch(0.6 0.15 60)', // Yellow
  warningBg: 'oklch(0.9 0.05 60)', // Light yellow background
  
  error: 'oklch(0.5 0.2 20)', // Red
  errorBg: 'oklch(0.9 0.05 20)', // Light red background
  
  info: 'oklch(0.5 0.15 240)', // Blue
  infoBg: 'oklch(0.9 0.05 240)', // Light blue background
} as const;

// Default colors (dark theme)
export const colors = darkColors;

// Color utility functions
export const colorUtils = {
  /**
   * Create a color with opacity
   * @param color - OKLCH color string
   * @param opacity - Opacity value (0-1)
   * @returns Color with opacity
   */
  withOpacity: (color: string, opacity: number): string => {
    return `${color} / ${opacity}`;
  },

  /**
   * Create a lighter version of a color
   * @param color - OKLCH color string
   * @param lightness - Lightness adjustment (0-1)
   * @returns Lighter color
   */
  lighter: (color: string, lightness: number): string => {
    const match = color.match(/oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/);
    if (!match) return color;
    
    const [, l, c, h] = match;
    const newLightness = Math.min(1, parseFloat(l) + lightness);
    return `oklch(${newLightness} ${c} ${h})`;
  },

  /**
   * Create a darker version of a color
   * @param color - OKLCH color string
   * @param lightness - Lightness adjustment (0-1)
   * @returns Darker color
   */
  darker: (color: string, lightness: number): string => {
    const match = color.match(/oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/);
    if (!match) return color;
    
    const [, l, c, h] = match;
    const newLightness = Math.max(0, parseFloat(l) - lightness);
    return `oklch(${newLightness} ${c} ${h})`;
  },

  /**
   * Create a color with different chroma (saturation)
   * @param color - OKLCH color string
   * @param chroma - Chroma adjustment (0-1)
   * @returns Color with adjusted chroma
   */
  withChroma: (color: string, chroma: number): string => {
    const match = color.match(/oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/);
    if (!match) return color;
    
    const [, l, , h] = match;
    return `oklch(${l} ${chroma} ${h})`;
  },

  /**
   * Create a color with different hue
   * @param color - OKLCH color string
   * @param hue - Hue adjustment (0-360)
   * @returns Color with adjusted hue
   */
  withHue: (color: string, hue: number): string => {
    const match = color.match(/oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/);
    if (!match) return color;
    
    const [, l, c] = match;
    return `oklch(${l} ${c} ${hue})`;
  }
};

// Theme-aware color combinations
export const getColorCombinations = (theme: 'light' | 'dark' = 'dark') => {
  const colors = theme === 'light' ? lightColors : darkColors;
  
  return {
    // Button variants
    primaryButton: {
      background: colors.primary,
      backgroundHover: colors.primaryHover,
      backgroundActive: colors.primaryActive,
      text: colors.textPrimary,
    },
    
    secondaryButton: {
      background: colors.surface,
      backgroundHover: colors.surfaceHover,
      backgroundActive: colors.surfaceActive,
      text: colors.textPrimary,
      border: colors.borderSubtle,
    },
    
    // Card variants
    card: {
      background: colors.surface,
      border: colors.borderSubtle,
      text: colors.textPrimary,
    },
    
    // Alert variants
    successAlert: {
      background: colors.successBg,
      border: colors.success,
      text: colors.success,
    },
    
    warningAlert: {
      background: colors.warningBg,
      border: colors.warning,
      text: colors.warning,
    },
    
    errorAlert: {
      background: colors.errorBg,
      border: colors.error,
      text: colors.error,
    },
    
    infoAlert: {
      background: colors.infoBg,
      border: colors.info,
      text: colors.info,
    },
  } as const;
};

// Default color combinations (dark theme)
export const colorCombinations = getColorCombinations('dark');

// Type definitions for better TypeScript support
export type ColorKey = keyof typeof colors;
export type ColorCombinationKey = keyof typeof colorCombinations;
