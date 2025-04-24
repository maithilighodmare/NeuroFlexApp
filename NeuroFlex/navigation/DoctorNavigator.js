import { createStackNavigator } from "@react-navigation/stack";
import DoctorDashboard from "../screens/Doctor/DoctorDashboard";
import DoctorProfile from "../screens/Doctor/DoctorProfile";

import Home from '../screens/Common/Home';

const Stack = createStackNavigator();

export default function DoctorNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* The common Home screen */}
      <Stack.Screen name="Home" component={Home} />
      
      {/* Doctor-specific screens */}
      <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      
    </Stack.Navigator>
  );
}
