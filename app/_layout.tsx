import {
  Stack,
} from "expo-router";
import {
  StatusBar,
} from "expo-status-bar";

import { colors } from "@/constants/theme";

/**
 * Root navigation layout for QuestBoard.
 *
 * Authentication will be added later. For now, every route belongs to the main
 * application stack.
 */
export default function RootLayout() {
  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor={
          colors.background
        }
      />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor:
              colors.background,
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}