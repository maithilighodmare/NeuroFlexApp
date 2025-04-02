import { View, Text, Button } from "react-native";

export default function PatientSettings({ navigation }) {
  return (
    <View>
      <Text>Patient Settings</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.navigate("PatientDashboard")} />
    </View>
  );
}
