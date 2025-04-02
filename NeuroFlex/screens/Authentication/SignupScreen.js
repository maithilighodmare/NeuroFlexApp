import { View, Text, Button } from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
