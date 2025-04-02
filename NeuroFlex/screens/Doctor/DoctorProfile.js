import { View, Text, Button } from "react-native";

export default function DoctorProfile({ navigation }) {
  return (
    <View>
      <Text>Doctor Profile</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.navigate("DoctorDashboard")} />
    </View>
  );
}
