import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home'); // Always navigate to Home
  };

  const handleProfilePress = () => {
    navigation.navigate('DoctorProfile'); 
  };

  const handleMenuPress = () => {
    navigation.navigate('Menu'); // Or set another default page for the menu icon
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={handleHomePress}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfilePress}>
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMenuPress}>
        <Ionicons name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#444',
    backgroundColor: '#000066',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomNav;
