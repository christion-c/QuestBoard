import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  layout,
  radius,
  spacing,
  typography,
} from "@/constants/theme";

export type QuestButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

interface QuestButtonProps
  extends Omit<
    PressableProps,
    "style" | "children"
  > {
  title: string;
  variant?: QuestButtonVariant;
  isLoading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Shared QuestBoard button.
 *
 * It includes consistent pressed, disabled, loading, and accessibility states.
 */
export const QuestButton = ({
  title,
  variant = "primary",
  isLoading = false,
  fullWidth = true,
  disabled = false,
  style,
  ...pressableProps
}: QuestButtonProps) => {
  const isDisabled =
    disabled || isLoading;

  const loadingColor =
    variant === "primary" ||
    variant === "danger"
      ? colors.textOnPrimary
      : colors.primary;

  return (
    <Pressable
      {...pressableProps}
      accessibilityRole="button"
      accessibilityLabel={
        pressableProps.accessibilityLabel ??
        title
      }
      accessibilityState={{
        disabled: isDisabled,
        busy: isLoading,
      }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        variantStyles[variant],
        pressed &&
          !isDisabled &&
          pressedStyles[variant],
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          testID="quest-button-loading"
          color={loadingColor}
        />
      ) : (
        <ThemedText
          style={[
            styles.text,
            textVariantStyles[variant],
            isDisabled &&
              styles.disabledText,
          ]}
        >
          {title}
        </ThemedText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: layout.minimumTouchTarget,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.small,
    borderWidth: 1,
    borderRadius: radius.medium,
  },

  fullWidth: {
    width: "100%",
  },

  text: {
    ...typography.button,
    textAlign: "center",
  },

  disabled: {
    backgroundColor:
      colors.disabledBackground,
    borderColor:
      colors.disabledBackground,
    opacity: 0.8,
  },

  disabledText: {
    color: colors.disabled,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.primaryBorder,
  },

  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  danger: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
});

const pressedStyles = StyleSheet.create({
  primary: {
    backgroundColor:
      colors.primaryPressed,
    borderColor:
      colors.primaryPressed,
  },

  secondary: {
    backgroundColor:
      colors.primarySoft,
  },

  ghost: {
    backgroundColor:
      colors.surfaceMuted,
  },

  danger: {
    opacity: 0.82,
  },
});

const textVariantStyles =
  StyleSheet.create({
    primary: {
      color: colors.textOnPrimary,
    },

    secondary: {
      color: colors.primary,
    },

    ghost: {
      color: colors.primary,
    },

    danger: {
      color: colors.textOnPrimary,
    },
  });