import {
  View,
  Button,
  Text,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Advanced Form Development and Validation with React Hook Form & Zod
      </Text>

      <View style={styles.button}>
        <Button
          title="Employee Form"
          onPress={() =>
            router.push("/employee-form")
          }
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Sign In"
          onPress={() =>
            router.push("/sign-in")
          }
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Sign Up"
          onPress={() =>
            router.push("/sign-up")
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    marginBottom: 15,
  },
});