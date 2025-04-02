import { View, Text, Button } from "react-native";

export default function DoctorDashboard({ navigation }) {
  return (
    <View>
      <Text>Doctor Dashboard</Text>
      <Button title="Profile" onPress={() => navigation.navigate("DoctorProfile")} />
      <Button title="Settings" onPress={() => navigation.navigate("DoctorSettings")} />
      <Button title="Logout" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
}
