import {
  StyleSheet,
  View,
} from "react-native";

import { QuestCard } from "@/components/ui/QuestCard";
import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  spacing,
} from "@/constants/theme";

interface SummaryStatProps {
  label: string;
  value: string | number;
  supportingText?: string;
}

/**
 * Small reusable dashboard statistic.
 */
export const SummaryStat = ({
  label,
  value,
  supportingText,
}: SummaryStatProps) => {
  return (
    <QuestCard style={styles.card}>
      <ThemedText variant="caption">
        {label}
      </ThemedText>

      <ThemedText
        variant="title"
        style={styles.value}
      >
        {value}
      </ThemedText>

      {supportingText ? (
        <ThemedText variant="caption">
          {supportingText}
        </ThemedText>
      ) : (
        <View style={styles.placeholder} />
      )}
    </QuestCard>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 100,
  },

  value: {
    marginVertical: spacing.extraSmall,
    color: colors.primary,
  },

  placeholder: {
    height: 18,
  },
});