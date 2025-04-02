import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import PatientNavigator from "./PatientNavigator";
import DoctorNavigator from "./DoctorNavigator";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Patient" component={PatientNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Doctor" component={DoctorNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
