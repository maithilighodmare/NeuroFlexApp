import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomNav from '../../components/BottomNav';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BottomNav></BottomNav>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <Text style={styles.header}>Welcome, Dipak 👋</Text>

        {/* Quick Actions */}
        <View style={styles.cardContainer}>
          {[ 
            { label: 'View Progress', icon: 'chart-line' },
          ].map((item, i) => (
            <TouchableOpacity key={i} style={styles.card}>
              <FontAwesome5 name={item.icon} size={20} color="#7f9cf5" />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tutorial Section */}
        <Text style={styles.sectionTitle}>🎥 How to Use Neuro Flex</Text>
        <TouchableOpacity style={styles.linkCard} onPress={() => Linking.openURL('https://youtube.com')}>
          <Text style={styles.linkText}>Watch Tutorial</Text>
        </TouchableOpacity>

        {/* Exercise Guides */}
        <Text style={styles.sectionTitle}>🏃‍♀️ Guided Exercises</Text>
        {[
          'Basic Balance Routine',
          'Foot Strengthening Movements',
          'Seated Posture for Exercises',
        ].map((exercise, i) => (
          <TouchableOpacity key={i} style={styles.linkCard}>
            <Text style={styles.linkText}>{exercise}</Text>
          </TouchableOpacity>
        ))}

        {/* Contact */}
        <Text style={styles.sectionTitle}>📞 Need Help?</Text>
        <TouchableOpacity style={styles.linkCard} onPress={() => Linking.openURL('mailto:support@neuroflex.com')}>
          <Text style={styles.linkText}>Email Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkCard} onPress={() => Linking.openURL('tel:+919999999999')}>
          <Text style={styles.linkText}>Call Us</Text>
        </TouchableOpacity>

      </ScrollView>

     

      {/* Bottom Navigation */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f4f6fa', 
    paddingHorizontal: 20, 
    paddingTop: 40, 
    
  },

  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#1f2937', 
    textAlign: 'center', 
    marginBottom: 20
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginTop: 25, 
    marginBottom: 12, 
    color: '#374151' 
  },

  cardContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginBottom: 25 
  },

  card: {
    backgroundColor: '#ffffff',
    width: '60%', 
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#ccc',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  cardText: { 
    marginLeft: 10, 
    fontSize: 15, 
    color: '#1f2937' 
  },

  linkCard: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 10,
  },

  linkText: { 
    color: '#2563eb', 
    fontWeight: '500', 
    fontSize: 15 
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    borderTopColor: '#e5e7eb',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
  },

  doctorName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginTop: 10, 
    marginBottom: 10, 
  },
});
