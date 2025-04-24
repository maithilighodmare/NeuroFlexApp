import { createStackNavigator } from "@react-navigation/stack";
import PatientDashboard from "../screens/Patient/PatientDashboard";
import PatientSettings from "../screens/Patient/PatientProfile";
import Home from '../screens/Common/Home'; // Import the common Home screen

const Stack = createStackNavigator();

export default function PatientNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* The common Home screen */}
      <Stack.Screen name="Home" component={Home} />
      
      {/* Patient-specific screens */}
      <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
      <Stack.Screen name="PatientSettings" component={PatientSettings} />

    </Stack.Navigator>
  );
}
