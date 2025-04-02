import { View, Text, Button } from "react-native";

export default function PatientRecords({ navigation }) {
  return (
    <View>
      <Text>Patient Records</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.navigate("PatientDashboard")} />
    </View>
  );
}
