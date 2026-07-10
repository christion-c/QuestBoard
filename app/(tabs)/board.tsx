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

interface BoardColumnProps {
  title: string;
  count: number;
  description: string;
}

/**
 * Placeholder column that establishes the future board layout.
 */
const BoardColumn = ({
  title,
  count,
  description,
}: BoardColumnProps) => {
  return (
    <QuestCard style={styles.column}>
      <View style={styles.columnHeader}>
        <ThemedText variant="subtitle">
          {title}
        </ThemedText>

        <View style={styles.countBadge}>
          <ThemedText
            variant="label"
            style={styles.countText}
          >
            {count}
          </ThemedText>
        </View>
      </View>

      <ThemedText
        variant="caption"
        style={styles.columnDescription}
      >
        {description}
      </ThemedText>
    </QuestCard>
  );
};

/**
 * Future kanban-style task board.
 */
export default function BoardScreen() {
  return (
    <ScreenContainer
      title="Task Board"
      description="Organize tasks by their current state without treating every unfinished item as an emergency."
      headerAction={
        <QuestButton
          title="New task"
          fullWidth={false}
          onPress={() => {
            /**
             * Task creation will be implemented later.
             */
          }}
        />
      }
    >
      <View style={styles.columns}>
        <BoardColumn
          title="To Do"
          count={0}
          description="Tasks waiting for attention."
        />

        <BoardColumn
          title="In Progress"
          count={0}
          description="Tasks you have intentionally started."
        />

        <BoardColumn
          title="Completed"
          count={0}
          description="Finished tasks and earned progress."
        />
      </View>

      <EmptyState
        icon="albums-outline"
        title="Your task board is empty"
        description="Once task storage is connected, quests will appear here and move between To Do, In Progress, and Completed."
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  columns: {
    gap: spacing.medium,
  },

  column: {
    backgroundColor: colors.surface,
  },

  columnHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.small,
  },

  countBadge: {
    minWidth: 28,
    minHeight: 28,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.small,
    backgroundColor:
      colors.primarySoft,
    borderRadius: radius.pill,
  },

  countText: {
    color: colors.primary,
  },

  columnDescription: {
    marginTop: spacing.small,
  },
});