import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Explore</ThemedText>
        </ThemedView>
        <ThemedText>
          This app includes example code to help you get started.
        </ThemedText>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
