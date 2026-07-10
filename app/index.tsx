import {
  Redirect,
} from "expo-router";

/**
 * QuestBoard currently opens directly into the main tab navigator.
 *
 * This route will later redirect users based on authentication state.
 */
export default function IndexScreen() {
  return <Redirect href="/(tabs)" />;
}