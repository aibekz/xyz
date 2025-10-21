'use client';

import { useTheme } from 'next-themes';
import { getColorCombinations, darkColors, lightColors } from './colors';

/**
 * Hook to get theme-aware colors and color combinations
 * This hook provides easy access to colors that automatically
 * adapt to the current theme (light/dark)
 */
export function useThemeColors() {
  const { theme, systemTheme } = useTheme();
  
  // Determine the actual theme being used
  const actualTheme = theme === 'system' ? systemTheme : theme;
  const isDark = actualTheme === 'dark';
  
  // Get the appropriate color palette
  const colors = isDark ? darkColors : lightColors;
  
  // Get theme-aware color combinations
  const colorCombinations = getColorCombinations(isDark ? 'dark' : 'light');
  
  return {
    colors,
    colorCombinations,
    theme: actualTheme,
    isDark,
    isLight: !isDark,
  };
}
