import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">About Me</ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText>
            Hi, I’m <ThemedText type="defaultSemiBold">Wenard Ken Santos</ThemedText>, 
            a 3rd-year Information Technology student with a passion for project
            management and leadership.
          </ThemedText>
          <ThemedText>
            In my 2nd year, I led a student project where I coordinated tasks,
            tracked deadlines, and ensured we successfully delivered results.
          </ThemedText>
          <ThemedText>
            I also contributed as a Back-End Designer on another project,
            focusing on databases, APIs, and server-side logic.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  card: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerImage: {
    height: 160,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
