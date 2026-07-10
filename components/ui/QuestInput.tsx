import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
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

interface QuestInputProps
  extends TextInputProps {
  label: string;
  error?: string;
  supportingText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * Shared labeled form input.
 *
 * Validation messages and supporting text are displayed consistently beneath
 * the field.
 */
export const QuestInput = ({
  label,
  error,
  supportingText,
  containerStyle,
  ...textInputProps
}: QuestInputProps) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
      ]}
    >
      <ThemedText
        variant="label"
        style={styles.label}
      >
        {label}
      </ThemedText>

      <TextInput
        {...textInputProps}
        accessibilityLabel={
          textInputProps.accessibilityLabel ??
          label
        }
        accessibilityHint={
          error
            ? `${label} has an error: ${error}`
            : textInputProps.accessibilityHint
        }
        placeholderTextColor={
          colors.textMuted
        }
        style={[
          styles.input,
          textInputProps.multiline &&
            styles.multilineInput,
          error && styles.inputError,
          textInputProps.style,
        ]}
      />

      {error ? (
        <ThemedText
          variant="error"
          accessibilityLiveRegion="polite"
          style={styles.supportingText}
        >
          {error}
        </ThemedText>
      ) : supportingText ? (
        <ThemedText
          variant="caption"
          style={styles.supportingText}
        >
          {supportingText}
        </ThemedText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: spacing.medium,
  },

  label: {
    marginBottom: spacing.small,
  },

  input: {
    minHeight:
      layout.minimumTouchTarget,
    paddingHorizontal: spacing.medium,
    paddingVertical: 12,
    backgroundColor: colors.surface,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.medium,
    ...typography.body,
  },

  multilineInput: {
    minHeight: 110,
    textAlignVertical: "top",
  },

  inputError: {
    borderColor: colors.error,
  },

  supportingText: {
    marginTop: spacing.extraSmall,
  },
});