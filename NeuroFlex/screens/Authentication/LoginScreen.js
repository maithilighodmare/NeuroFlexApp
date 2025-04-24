import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView } from "react-native";
import { useUser } from "../../UserContext";  

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Get access to the setRole function from the context
  const { setRole } = useUser();

  // Function to handle login and set the role
  const handleLogin = () => {
    // You can replace this with actual login logic (checking credentials)
    const isDoctor = email.includes("doctor");  // Just an example check based on email
    
    if (isDoctor) {
      setRole("doctor");  // Set role to doctor if email contains "doctor"
      navigation.navigate("Doctor");  // Navigate to the Doctor dashboard
    } else {
      setRole("patient");  // Set role to patient
      navigation.navigate("Patient");  // Navigate to the Patient dashboard
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Arrow and Login */}
      <Text style={styles.loginTitle}>← Login</Text>

      {/* App Name (replaces logo for now) */}
      <Text style={styles.appName}>NeuroFlex</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Links */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={styles.linkText}>Already Have an Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* Keep existing buttons */}
      <View style={{ marginTop: 30 }}>
        <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
        <Button title="Go to Doctor Dashboard" onPress={() => navigation.navigate("DoctorDashboard")} />
        <Button title="Go to Patient Dashboard" onPress={() => navigation.navigate("PatientDashboard")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#130C56",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
  },
  loginTitle: {
    color: "#fff",
    fontSize: 18,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#C15CC5",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  linkText: {
    color: "#fff",
    fontSize: 14,
  },
  signUp: {
    color: "#C15CC5",
    fontWeight: "bold",
  },
  forgot: {
    color: "#fff",
    fontSize: 13,
    marginTop: 10,
  },
});
