import { createStackNavigator } from "@react-navigation/stack";
import DoctorDashboard from "../screens/Doctor/DoctorDashboard";
import DoctorProfile from "../screens/Doctor/DoctorProfile";
import DoctorSettings from "../screens/Doctor/DoctorSettings";

const Stack = createStackNavigator();

export default function DoctorNavigator() {
  return (
    <Stack.Navigator initialRouteName="DoctorDashboard">
      <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      <Stack.Screen name="DoctorSettings" component={DoctorSettings} />
    </Stack.Navigator>
  );
}
