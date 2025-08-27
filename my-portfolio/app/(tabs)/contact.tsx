import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";

export default function ContactScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.headerImage}
        />
      }
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView style={styles.section}>
        <ThemedText type="title">Get in Touch</ThemedText>

        <ThemedText> wenardken57@gmail.com</ThemedText>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/WenardKen57")}
        >
          <ThemedText type="link">GitHub</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
    gap: 12,
  },
  headerImage: {
    height: 160,
    width: 250,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
