/**
 * QuestBoard's centralized visual design system.
 *
 * Components should use these values instead of defining arbitrary colors,
 * spacing, and sizes throughout the application.
 */
export const colors = {
  /**
   * Primary brand colors.
   *
   * The muted violet gives QuestBoard personality without making every screen
   * visually loud or overstimulating.
   */
  primary: "#6750A4",
  primaryPressed: "#513D86",
  primarySoft: "#EEE9F8",
  primaryBorder: "#CFC3E8",

  /**
   * Supporting accent colors.
   */
  accent: "#D97736",
  accentSoft: "#FCEBDD",

  /**
   * Page and component surfaces.
   */
  background: "#F6F5F8",
  surface: "#FFFFFF",
  surfaceMuted: "#EEECEF",
  surfaceElevated: "#FFFFFF",

  /**
   * Text colors.
   */
  text: "#25232A",
  textSecondary: "#66616D",
  textMuted: "#8B8690",
  textOnPrimary: "#FFFFFF",

  /**
   * Borders and separators.
   */
  border: "#DDD9E2",
  borderStrong: "#C8C2CE",

  /**
   * Semantic feedback.
   */
  success: "#347A58",
  successSoft: "#E1F2E8",

  warning: "#A4611B",
  warningSoft: "#FFF0D9",

  error: "#B33A3A",
  errorSoft: "#FCE5E5",

  info: "#376F9B",
  infoSoft: "#E3EFF8",

  /**
   * Task energy indicators.
   */
  energyLow: "#4E8065",
  energyLowSoft: "#E3F0E8",

  energyMedium: "#9B7024",
  energyMediumSoft: "#F7ECD5",

  energyHigh: "#A34D3D",
  energyHighSoft: "#F8E4E0",

  /**
   * Transparent overlays.
   */
  overlay: "rgba(24, 21, 29, 0.46)",

  /**
   * Disabled controls.
   */
  disabled: "#AAA5AE",
  disabledBackground: "#E7E4E9",
} as const;

/**
 * Consistent spacing scale.
 *
 * Using a small spacing scale prevents screens from collecting dozens of
 * nearly identical margin values.
 */
export const spacing = {
  none: 0,
  extraSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
  section: 40,
  screen: 20,
} as const;

/**
 * Shared corner-radius scale.
 */
export const radius = {
  small: 6,
  medium: 10,
  large: 16,
  extraLarge: 24,
  pill: 999,
} as const;

/**
 * Shared font sizes and line heights.
 */
export const typography = {
  display: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "700" as const,
  },

  title: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "700" as const,
  },

  heading: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "700" as const,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600" as const,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400" as const,
  },

  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600" as const,
  },

  caption: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400" as const,
  },

  button: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700" as const,
  },
} as const;

/**
 * Shared sizing values.
 */
export const layout = {
  formMaxWidth: 560,
  contentMaxWidth: 760,
  tabBarHeight: 66,
  minimumTouchTarget: 48,
} as const;

/**
 * Reusable shadow configuration.
 *
 * iOS uses shadow properties while Android relies primarily on elevation.
 */
export const shadows = {
  small: {
    shadowColor: "#1D1823",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },

  medium: {
    shadowColor: "#1D1823",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
} as const;