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
  employeeValidation,
} from "../validation/employeeValidation";

export default function EmployeeForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(employeeValidation),
    mode: "onChange",
  });

  const submitForm = (data: any) => {
    Alert.alert(
      "Success",
      "Employee information submitted"
    );

    console.log(data);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>
        Employee Information
      </Text>

      <Controller
        control={control}
        name="firstName"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="First Name"
            icon="person-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Last Name"
            icon="person-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.lastName?.message}
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
        name="phone"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Phone Number"
            icon="call-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.phone?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="postalCode"
        defaultValue=""
        render={({ field }) => (
          <FormInput
            placeholder="Postal Code"
            icon="location-outline"
            value={field.value}
            onChangeText={field.onChange}
            error={errors.postalCode?.message}
          />
        )}
      />

      <Button
        title="Submit"
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