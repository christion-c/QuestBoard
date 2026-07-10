import {
  PropsWithChildren,
  ReactNode,
} from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { ThemedText } from "@/components/ui/ThemedText";
import {
  colors,
  layout,
  spacing,
} from "@/constants/theme";

interface ScreenContainerProps
  extends PropsWithChildren {
  title?: string;
  description?: string;
  headerAction?: ReactNode;
  scrollable?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

/**
 * Shared screen wrapper.
 *
 * It provides safe-area handling, consistent page padding, optional scrolling,
 * and a standard screen heading.
 */
export const ScreenContainer = ({
  title,
  description,
  headerAction,
  scrollable = true,
  contentStyle,
  children,
}: ScreenContainerProps) => {
  const content = (
    <View
      style={[
        styles.content,
        contentStyle,
      ]}
    >
      {title || description || headerAction ? (
        <View style={styles.header}>
          <View style={styles.headerText}>
            {title ? (
              <ThemedText variant="title">
                {title}
              </ThemedText>
            ) : null}

            {description ? (
              <ThemedText
                variant="body"
                style={styles.description}
              >
                {description}
              </ThemedText>
            ) : null}
          </View>

          {headerAction ? (
            <View style={styles.headerAction}>
              {headerAction}
            </View>
          ) : null}
        </View>
      ) : null}

      {children}
    </View>
  );

  return (
    <SafeAreaView
      edges={[
        "left",
        "right",
        "bottom",
      ]}
      style={styles.safeArea}
    >
      {scrollable ? (
        <ScrollView
          contentContainerStyle={
            styles.scrollContent
          }
          keyboardShouldPersistTaps="handled"
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    flexGrow: 1,
  },

  content: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    paddingHorizontal: spacing.screen,
    paddingVertical: spacing.large,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.medium,
    marginBottom: spacing.large,
  },

  headerText: {
    flex: 1,
  },

  description: {
    marginTop: spacing.small,
    color: colors.textSecondary,
  },

  headerAction: {
    flexShrink: 0,
  },
});