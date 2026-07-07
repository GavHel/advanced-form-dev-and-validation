import {
  ScrollView,
  Text,
  Button,
  Alert,
  StyleSheet,
} from "react-native";

import {
  useForm,
  Controller,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../components/FormInput";

import {
  signInValidation,
} from "../validation/authValidation";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signInValidation),
    mode: "onChange",
  });

  const submitForm = (data: any) => {
    Alert.alert("Success", "Signed In");
    console.log(data);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>
        Sign In
      </Text>

      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Email"
            icon="mail-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Password"
            icon="lock-closed-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.password?.message}
            secureTextEntry
          />
        )}
      />

      <Button
        title="Sign In"
        disabled={!isValid}
        onPress={handleSubmit(submitForm)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
});