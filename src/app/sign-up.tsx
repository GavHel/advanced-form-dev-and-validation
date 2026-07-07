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
  signUpValidation,
} from "../validation/authValidation";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpValidation),
    mode: "onChange",
  });

  const submitForm = (data: any) => {
    Alert.alert(
      "Success",
      "Account Created"
    );

    console.log(data);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>
        Create Account
      </Text>

      <Controller
        control={control}
        name="fullName"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Full Name"
            icon="person-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.fullName?.message}
          />
        )}
      />

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

      <Controller
        control={control}
        name="confirmPassword"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Confirm Password"
            icon="lock-closed-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.confirmPassword?.message}
            secureTextEntry
          />
        )}
      />

      <Button
        title="Sign Up"
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