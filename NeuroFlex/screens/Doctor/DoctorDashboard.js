import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import LayoutWithBottomNav from '../../navigation/LayoutWithBottomNav';

const patients = [
  { id: "1", name: "Aashvi Tekade", email: "ashvi@gmail.com", age: 78, phone: "8888980e7" },
  { id: "2", name: "Dipak Munde", email: "dipak@gmail.com", age: 60, phone: "8888980e7" },
  { id: "3", name: "Amogh Nagarkar", email: "amogh@gmail.com", age: 30, phone: "8888980e7" },
  { id: "4", name: "Yogesh Nande", email: "yogesh@gmail.com", age: 22, phone: "8888980e7" },
];

export default function DoctorDashboard({ navigation }) {
  const [search, setSearch] = useState("");

  // Filter patients based on search
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <View style={styles.container}>
      <LayoutWithBottomNav>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Doctor dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DoctorProfile")}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* DOCTOR NAME */}
      <Text style={styles.doctorName}>Dr. Milind Kahile</Text>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons name="close-circle" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>

      {/* PATIENT LIST */}
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name="person-circle-outline" size={40} color="black" />
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>{item.name}</Text>
              <Text style={styles.patientEmail}>{item.email}</Text>
              <Text style={styles.patientDetails}>Age: {item.age}</Text>
              <Text style={styles.patientDetails}>Phone: {item.phone}</Text>
            </View>
            {/* Red "A" Icon Replacement */}
            <Ionicons name="alert-circle" size={30} color="red" />
          </View>
        )}
      />
     </LayoutWithBottomNav>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#201869", paddingTop: 40  },
  header: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "white" },
  doctorName: { color: "white", fontSize: 16, textAlign: "center", marginVertical: 10 },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  searchInput: { flex: 1, color: "black" },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
  },
  patientInfo: { flex: 1, marginLeft: 10 },
  patientName: { fontSize: 16, fontWeight: "bold", color: "black" },
  patientEmail: { fontSize: 14, color: "gray" },
  patientDetails: { fontSize: 12, color: "black" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#201869",
    padding: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

