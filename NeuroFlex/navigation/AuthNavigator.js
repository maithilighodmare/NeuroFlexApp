import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Authentication/LoginScreen";
import SignupScreen from "../screens/Authentication/SignupScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
