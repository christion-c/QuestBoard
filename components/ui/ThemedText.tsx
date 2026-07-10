import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

import {
  colors,
  typography,
} from "@/constants/theme";

export type ThemedTextVariant =
  | "display"
  | "title"
  | "heading"
  | "subtitle"
  | "body"
  | "label"
  | "caption"
  | "link"
  | "error"
  | "success";

interface ThemedTextProps extends TextProps {
  /**
   * Selects a predefined semantic text style.
   */
  variant?: ThemedTextVariant;

  /**
   * Optional custom styles are applied after the selected variant.
   */
  style?: StyleProp<TextStyle>;
}

/**
 * QuestBoard's shared typography component.
 *
 * Using semantic variants keeps text appearance consistent and prevents every
 * screen from inventing its own title size, weight, and color.
 */
export const ThemedText = ({
  variant = "body",
  style,
  children,
  ...textProps
}: ThemedTextProps) => {
  return (
    <Text
      {...textProps}
      style={[
        styles.base,
        variantStyles[variant],
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: colors.text,
  },
});

const variantStyles = StyleSheet.create({
  display: {
    ...typography.display,
  },

  title: {
    ...typography.title,
  },

  heading: {
    ...typography.heading,
  },

  subtitle: {
    ...typography.subtitle,
  },

  body: {
    ...typography.body,
  },

  label: {
    ...typography.label,
  },

  caption: {
    ...typography.caption,
    color: colors.textSecondary,
  },

  link: {
    ...typography.body,
    color: colors.primary,
    fontWeight: "700",
  },

  error: {
    ...typography.label,
    color: colors.error,
  },

  success: {
    ...typography.label,
    color: colors.success,
  },
});