import { View, Text, Button } from "react-native";

export default function DoctorSettings({ navigation }) {
  return (
    <View>
      <Text>Doctor Settings</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.navigate("DoctorDashboard")} />
    </View>
  );
}
