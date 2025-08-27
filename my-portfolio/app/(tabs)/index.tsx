import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      // Removed the React logo background
      headerImage={<ThemedView style={{ height: 0, width: 0 }} />}
    >
      {/* Profile Section */}
      <ThemedView style={styles.profileSection}>
        <Image
          source={require('@/assets/images/profile.jpg')} // <-- replace with your actual profile image
          style={styles.profileImage}
        />
        <ThemedText type="title" style={styles.heroTitle}>
          Wenard Ken Santos
        </ThemedText>
        <ThemedText type="subtitle" style={styles.heroSubtitle}>
          3rd Year IT Student | Aspiring Project Manager | Back-End Designer
        </ThemedText>
      </ThemedView>

      {/* About Teaser */}
      <ThemedView style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          About Me
        </ThemedText>
        <ThemedText style={styles.cardBody}>
          Passionate about project management and teamwork. I’ve led a student
          project as team leader and contributed as a back-end designer in
          another. 🚀
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
    padding: 20,
    gap: 12,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // circular
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
  },
});
