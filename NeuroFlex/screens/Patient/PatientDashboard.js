
import { View, Text, StyleSheet, Dimensions, ScrollView,TouchableOpacity } from "react-native";
import { ProgressChart, BarChart } from "react-native-chart-kit";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Optional for icons
import LayoutWithBottomNav from '../../navigation/LayoutWithBottomNav';


const screenWidth = Dimensions.get("window").width;

const patientData = {
  name: "Dipak Mundhe",
  age: 69,
  height: "6ft",
  weight: "70kg",
  progress: 0.75, // 75%
  achievements: {
    exercisesCompleted: 10,
    reflexImproved: 19,
  },
  weeklyStats: [2, 4, 6, 8], // mock data
};

export default function PatientDashboard() {
  return (
    <LayoutWithBottomNav>
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <Text style={styles.headerText}>PATIENT DASHBOARD</Text>
  <TouchableOpacity style={styles.profileRow} onPress={() => navigation.navigate("PatientSettings")}>
    <Text style={styles.name}>{patientData.name}</Text>
    <FontAwesome name="user-circle" size={28} color="#fff" />
  </TouchableOpacity>
</View>


      {/* Vitals */}
      <View style={styles.vitals}>
        <Text style={styles.vitalText}>Age: {patientData.age}</Text>
        <Text style={styles.vitalText}>Height: {patientData.height}</Text>
        <Text style={styles.vitalText}>Weight: {patientData.weight}</Text>
      </View>

      {/* Circular Progress */}
      <ProgressChart
        data={{
          labels: ["Progress"],
          data: [patientData.progress],
        }}
        width={screenWidth - 40}
        height={180}
        strokeWidth={16}
        radius={40}
        chartConfig={{
          backgroundGradientFrom: "#000066",
          backgroundGradientTo: "#000066",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => "#fff",
        }}
        hideLegend={true}
        style={{ marginVertical: 10, alignSelf: "center" }}
      />
      <View style={styles.legend}>
        <Text style={{ color: "green" }}>● Good (80-100)</Text>
        <Text style={{ color: "orange" }}>● Moderate (50-79)</Text>
        <Text style={{ color: "red" }}>● Weak (0-49)</Text>
      </View>

      {/* Achievements */}
      <View style={styles.achievements}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.achievementText}>
          You've completed {patientData.achievements.exercisesCompleted} exercises!
        </Text>
        <Text style={styles.achievementText}>
          Reflex score improved by {patientData.achievements.reflexImproved}%!
        </Text>
      </View>

      {/* Bar Chart */}
      <BarChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu"],
          datasets: [{ data: patientData.weeklyStats }],
        }}
        width={screenWidth - 40}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#000066",
          backgroundGradientTo: "#000066",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          labelColor: () => "#fff",
        }}
        style={{ marginVertical: 10, alignSelf: "center", borderRadius: 10 }}
      />

      {/* Quote */}
      <Text style={styles.motivational}>
        You're 80% close to achieving your weekly goal—{"\n"}Keep pushing!
      </Text>
 
      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="person" size={24} color="white" />
        <Ionicons name="menu" size={24} color="white" />
      </View> */}
    
    </ScrollView>
     </LayoutWithBottomNav>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000066",
    padding: 20,
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  vitals: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  vitalText: {
    color: "#fff",
    fontSize: 16,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  achievements: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  achievementText: {
    fontSize: 14,
    color: "#000",
  },
  motivational: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    marginTop: 15,
    fontStyle: "italic",
  },
 
});

