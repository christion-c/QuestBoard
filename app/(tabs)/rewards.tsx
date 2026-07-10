import {
  StyleSheet,
  View,
} from "react-native";

import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { EmptyState } from "@/components/ui/EmptyState";
import { QuestButton } from "@/components/ui/QuestButton";
import { QuestCard } from "@/components/ui/QuestCard";
import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

/**
 * Custom reward management placeholder.
 */
export default function RewardsScreen() {
  return (
    <ScreenContainer
      title="Rewards"
      description="Create meaningful rewards and spend points earned from completed quests."
      headerAction={
        <QuestButton
          title="Add reward"
          fullWidth={false}
          onPress={() => {
            /**
             * Reward creation will be implemented after the points system.
             */
          }}
        />
      }
    >
      <QuestCard
        elevated
        style={styles.balanceCard}
      >
        <ThemedText
          variant="caption"
          style={styles.balanceLabel}
        >
          AVAILABLE POINTS
        </ThemedText>

        <View style={styles.balanceRow}>
          <ThemedText
            variant="display"
            style={styles.balance}
          >
            0
          </ThemedText>

          <View style={styles.pointBadge}>
            <ThemedText
              variant="label"
              style={styles.pointBadgeText}
            >
              QUEST POINTS
            </ThemedText>
          </View>
        </View>

        <ThemedText
          variant="body"
          style={styles.balanceDescription}
        >
          Complete tasks to earn points you can spend on
          rewards you define yourself.
        </ThemedText>
      </QuestCard>

      <ThemedText
        variant="heading"
        style={styles.sectionTitle}
      >
        Your rewards
      </ThemedText>

      <EmptyState
        icon="gift-outline"
        title="No rewards created"
        description="Add something motivating, restorative, or simply enjoyable. Rewards do not need to be productive. That would rather defeat the point."
        action={
          <QuestButton
            title="Create a reward"
            variant="secondary"
            onPress={() => {
              /**
               * Placeholder until rewards are implemented.
               */
            }}
          />
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  balanceCard: {
    marginBottom: spacing.extraLarge,
    padding: spacing.large,
    backgroundColor:
      colors.primary,
  },

  balanceLabel: {
    color: colors.textOnPrimary,
    opacity: 0.82,
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: spacing.medium,
    marginVertical: spacing.small,
  },

  balance: {
    color: colors.textOnPrimary,
  },

  pointBadge: {
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.extraSmall,
    backgroundColor:
      "rgba(255, 255, 255, 0.16)",
    borderRadius: radius.pill,
  },

  pointBadgeText: {
    color: colors.textOnPrimary,
    fontSize: 11,
  },

  balanceDescription: {
    color: colors.textOnPrimary,
    opacity: 0.9,
  },

  sectionTitle: {
    marginBottom: spacing.small,
  },
});