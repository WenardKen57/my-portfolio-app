import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image } from 'expo-image';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function ProjectsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.section}>
        <ThemedText type="title">Projects</ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Team Leader – Student Project - Car Rental Management</ThemedText>
          <ThemedText>
            Coordinated a group of classmates, assigned tasks, and ensured
            timely delivery of a working system.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">
            Back-End Designer – Student Project - Events Reservation and Management System
          </ThemedText>
          <ThemedText>
            Designed database schemas, implemented server-side logic, and built
            APIs to support the application.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 10,
    gap: 8,
  },
    headerImage: {
    height: 160,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
