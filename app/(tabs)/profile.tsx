import {
  StyleSheet,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ScreenContainer } from "@/components/layout/ScreenContainer";
import { QuestButton } from "@/components/ui/QuestButton";
import { QuestCard } from "@/components/ui/QuestCard";
import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

interface SettingsRowProps {
  icon:
    | "person-outline"
    | "color-palette-outline"
    | "accessibility-outline"
    | "notifications-outline"
    | "shield-checkmark-outline";
  title: string;
  description: string;
}

/**
 * Reusable profile/settings navigation row.
 */
const SettingsRow = ({
  icon,
  title,
  description,
}: SettingsRowProps) => {
  return (
    <View style={styles.settingsRow}>
      <View style={styles.settingsIcon}>
        <Ionicons
          name={icon}
          size={22}
          color={colors.primary}
        />
      </View>

      <View style={styles.settingsText}>
        <ThemedText variant="subtitle">
          {title}
        </ThemedText>

        <ThemedText
          variant="caption"
          style={styles.settingsDescription}
        >
          {description}
        </ThemedText>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.textMuted}
      />
    </View>
  );
};

/**
 * User profile and application settings placeholder.
 */
export default function ProfileScreen() {
  return (
    <ScreenContainer
      title="Profile"
      description="Account details, accessibility preferences, and QuestBoard settings will live here."
    >
      <QuestCard
        elevated
        style={styles.profileCard}
      >
        <View style={styles.avatar}>
          <Ionicons
            name="person-outline"
            size={38}
            color={colors.primary}
          />
        </View>

        <ThemedText variant="heading">
          Future QuestBoard User
        </ThemedText>

        <ThemedText
          variant="caption"
          style={styles.email}
        >
          Authentication has not been connected yet
        </ThemedText>

        <QuestButton
          title="Edit profile"
          variant="secondary"
          onPress={() => {
            /**
             * Profile editing will be added with authentication.
             */
          }}
          style={styles.profileButton}
        />
      </QuestCard>

      <ThemedText
        variant="heading"
        style={styles.sectionTitle}
      >
        Settings
      </ThemedText>

      <QuestCard>
        <SettingsRow
          icon="person-outline"
          title="Task defaults"
          description="Default points, energy, and time estimates."
        />

        <View style={styles.divider} />

        <SettingsRow
          icon="color-palette-outline"
          title="Appearance"
          description="Theme, contrast, and celebration effects."
        />

        <View style={styles.divider} />

        <SettingsRow
          icon="accessibility-outline"
          title="Accessibility"
          description="Reduced motion, sounds, and sensory preferences."
        />

        <View style={styles.divider} />

        <SettingsRow
          icon="notifications-outline"
          title="Notifications"
          description="Gentle reminders without digital harassment."
        />

        <View style={styles.divider} />

        <SettingsRow
          icon="shield-checkmark-outline"
          title="Privacy and account"
          description="Data controls and account deletion."
        />
      </QuestCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    alignItems: "center",
    marginBottom: spacing.extraLarge,
    padding: spacing.large,
  },

  avatar: {
    width: 84,
    height: 84,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.medium,
    backgroundColor:
      colors.primarySoft,
    borderRadius: radius.pill,
  },

  email: {
    marginTop: spacing.extraSmall,
    textAlign: "center",
  },

  profileButton: {
    marginTop: spacing.large,
  },

  sectionTitle: {
    marginBottom: spacing.medium,
  },

  settingsRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
  },

  settingsIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.medium,
    backgroundColor:
      colors.primarySoft,
    borderRadius: radius.medium,
  },

  settingsText: {
    flex: 1,
    marginRight: spacing.small,
  },

  settingsDescription: {
    marginTop: spacing.extraSmall,
  },

  divider: {
    height: 1,
    marginVertical: spacing.small,
    backgroundColor: colors.border,
  },
});