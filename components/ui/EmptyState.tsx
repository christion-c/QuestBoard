import {
  ComponentProps,
  ReactNode,
} from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  spacing,
} from "@/constants/theme";

interface EmptyStateProps {
  icon: ComponentProps<
    typeof Ionicons
  >["name"];
  title: string;
  description: string;
  action?: ReactNode;
}

/**
 * Reusable empty-state presentation for screens without content.
 */
export const EmptyState = ({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={48}
        color={colors.primary}
      />

      <ThemedText
        variant="heading"
        style={styles.title}
      >
        {title}
      </ThemedText>

      <ThemedText
        variant="body"
        style={styles.description}
      >
        {description}
      </ThemedText>

      {action ? (
        <View style={styles.action}>
          {action}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.section,
  },

  title: {
    marginTop: spacing.medium,
    textAlign: "center",
  },

  description: {
    maxWidth: 440,
    marginTop: spacing.small,
    color: colors.textSecondary,
    textAlign: "center",
  },

  action: {
    width: "100%",
    maxWidth: 280,
    marginTop: spacing.large,
  },
});