import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function FormInput({
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry,
  icon,
}: any) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedInput,
          error && styles.errorInput,
        ]}
      >
        <Ionicons
          name={icon}
          size={20}
          color="#666"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {error && (
        <Text style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  icon: {
    marginRight: 5,
  },

  input: {
    flex: 1,
    padding: 12,
  },

  focusedInput: {
    borderColor: "#2563eb",
    borderWidth: 2,
  },

  errorInput: {
    borderColor: "#dc2626",
  },

  errorText: {
    color: "#dc2626",
    marginTop: 4,
    marginLeft: 5,
    fontSize: 12,
  },
});