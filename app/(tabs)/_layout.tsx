import {
  Tabs,
} from "expo-router";
import {
  Ionicons,
} from "@expo/vector-icons";

import {
  colors,
  layout,
} from "@/constants/theme";

/**
 * Main QuestBoard bottom-tab navigation.
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor:
            colors.surface,
        },
        headerShadowVisible: false,
        headerTintColor: colors.text,

        tabBarActiveTintColor:
          colors.primary,
        tabBarInactiveTintColor:
          colors.textMuted,

        tabBarStyle: {
          height: layout.tabBarHeight,
          paddingTop: 6,
          paddingBottom: 8,
          backgroundColor:
            colors.surface,
          borderTopColor:
            colors.border,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          headerTitle: "QuestBoard",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="sunny-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="board"
        options={{
          title: "Board",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="albums-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="gift-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}