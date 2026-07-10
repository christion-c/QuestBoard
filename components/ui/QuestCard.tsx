import {
  PropsWithChildren,
} from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import {
  colors,
  radius,
  shadows,
  spacing,
} from "@/constants/theme";

interface QuestCardProps
  extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  elevated?: boolean;
}

/**
 * Shared surface used for summaries, tasks, rewards, and settings groups.
 */
export const QuestCard = ({
  children,
  style,
  elevated = false,
}: QuestCardProps) => {
  return (
    <View
      style={[
        styles.card,
        elevated && styles.elevated,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: spacing.medium,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.large,
  },

  elevated: {
    ...shadows.medium,
    borderColor: "transparent",
  },
});