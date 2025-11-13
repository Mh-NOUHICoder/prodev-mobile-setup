import { Image } from 'expo-image';
import { Platform, StyleSheet , Text , View  } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
    
      <View style={styles.container}>
        <Text style={styles.largeText}>Entry Screen - 😎 Awesome! </Text>
      </View>
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
    marginTop: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  largeText: {
    fontSize: 25,
    color: "#0278f7ff",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#f5f5f5ff",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "left",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
