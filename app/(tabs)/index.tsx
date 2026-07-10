import {
  StyleSheet,
  View,
} from "react-native";

import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { EmptyState } from "@/components/ui/EmptyState";
import { QuestButton } from "@/components/ui/QuestButton";
import { QuestCard } from "@/components/ui/QuestCard";
import { SummaryStat } from "@/components/ui/SummaryStat";
import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

/**
 * Main ADHD-friendly dashboard.
 *
 * Real tasks and points will replace the placeholder data in later stages.
 */
export default function TodayScreen() {
  return (
    <ScreenContainer
      title="Today"
      description="Focus on one useful next step, not the entire universe of unfinished obligations."
      headerAction={
        <QuestButton
          title="Add task"
          fullWidth={false}
          onPress={() => {
            /**
             * Task creation will be connected in a later stage.
             */
          }}
        />
      }
    >
      <View style={styles.summaryRow}>
        <SummaryStat
          label="Available points"
          value={0}
          supportingText="Ready to earn"
        />

        <SummaryStat
          label="Completed today"
          value={0}
          supportingText="No pressure"
        />

        <SummaryStat
          label="Active tasks"
          value={0}
          supportingText="A peaceful void"
        />
      </View>

      <QuestCard style={styles.focusCard}>
        <View style={styles.focusBadge}>
          <ThemedText
            variant="label"
            style={styles.focusBadgeText}
          >
            SUGGESTED NEXT STEP
          </ThemedText>
        </View>

        <ThemedText
          variant="heading"
          style={styles.focusTitle}
        >
          Add one small task
        </ThemedText>

        <ThemedText
          variant="body"
          style={styles.focusDescription}
        >
          Start with something that takes less than five
          minutes. Momentum is more useful than composing a
          flawless productivity constitution.
        </ThemedText>

        <QuestButton
          title="Create my first task"
          onPress={() => {
            /**
             * Navigation to task creation will be added with task CRUD.
             */
          }}
          style={styles.focusButton}
        />
      </QuestCard>

      <ThemedText
        variant="heading"
        style={styles.sectionTitle}
      >
        Today’s quests
      </ThemedText>

      <EmptyState
        icon="checkbox-outline"
        title="No tasks planned"
        description="Add one manageable task. QuestBoard will eventually help you sort the rest by energy, time, and priority."
        action={
          <QuestButton
            title="Add a task"
            variant="secondary"
            onPress={() => {
              /**
               * Placeholder until task creation is implemented.
               */
            }}
          />
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  summaryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.small,
    marginBottom: spacing.large,
  },

  focusCard: {
    marginBottom: spacing.extraLarge,
    padding: spacing.large,
    backgroundColor:
      colors.primarySoft,
    borderColor:
      colors.primaryBorder,
  },

  focusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.extraSmall,
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
  },

  focusBadgeText: {
    color: colors.textOnPrimary,
    fontSize: 11,
  },

  focusTitle: {
    marginTop: spacing.medium,
  },

  focusDescription: {
    marginTop: spacing.small,
    color: colors.textSecondary,
  },

  focusButton: {
    marginTop: spacing.large,
  },

  sectionTitle: {
    marginBottom: spacing.small,
  },
});