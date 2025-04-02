import { createStackNavigator } from "@react-navigation/stack";
import PatientDashboard from "../screens/Patient/PatientDashboard";
import PatientRecords from "../screens/Patient/PatientRecords";
import PatientSettings from "../screens/Patient/PatientSettings";

const Stack = createStackNavigator();

export default function PatientNavigator() {
  return (
    <Stack.Navigator initialRouteName="PatientDashboard">
      <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
      <Stack.Screen name="PatientRecords" component={PatientRecords} />
      <Stack.Screen name="PatientSettings" component={PatientSettings} />
    </Stack.Navigator>
  );
}
