import { View, Text, Button } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
      <Button title="Go to User Dashboard" onPress={() => navigation.navigate("DoctorDashboard")} />
      <Button title="Go to Patient Dashboard" onPress={() => navigation.navigate("PatientDashboard")} />
    </View>
  );
}
