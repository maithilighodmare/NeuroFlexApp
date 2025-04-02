import { View, Text, Button } from "react-native";

export default function PatientDashboard({ navigation }) {
  return (
    <View>
      <Text>Patient Dashboard</Text>
      <Button title="View Records" onPress={() => navigation.navigate("PatientRecords")} />
      <Button title="Settings" onPress={() => navigation.navigate("PatientSettings")} />
      <Button title="Logout" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
}
