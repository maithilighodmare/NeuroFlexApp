import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BottomNav from "../../components/BottomNav";
export default function DoctorProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     
       <View style={styles.header}>
         <Text style={styles.headerText}>Setting</Text>
         <Ionicons name="sunny-outline" size={24} color="white" />
       </View>
   
       <View style={styles.profileContainer}>
         <FontAwesome name="user-circle-o" size={100} color="white" />
         <TouchableOpacity style={styles.editIcon}>
           <MaterialIcons name="edit" size={24} color="##002366" />
         </TouchableOpacity>
         <View style={styles.userNameContainer}>
           <Text style={styles.userName}>Name of the user...</Text>
         </View>
       </View>
   
       <View style={styles.optionContainer}>
         <SettingOption icon="edit" text="Edit info" />
         <SettingOption icon="eye-slash" text="Password" />
         <SettingOption icon="battery-half" text="Battery" />
         <SettingOption icon="notifications" text="Notification" />
       </View>
   
       <BottomNav></BottomNav>
     </SafeAreaView>
  );
}
function SettingOption({ icon, text }) {
let IconComponent;
let iconName = icon;

if (icon === 'edit') IconComponent = MaterialIcons;
else if (icon === 'eye-slash') IconComponent = FontAwesome;
else if (icon === 'battery') IconComponent = Ionicons;
else IconComponent = Ionicons;

return (
  <TouchableOpacity style={styles.option}>
    <IconComponent name={iconName} size={20} color="white" />
    <Text style={styles.optionText}>{text}</Text>
  </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#002366',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  editIcon: {
    position: 'absolute',
    right: 110,
    bottom: 20,
    backgroundColor: 'pink',
    borderRadius: 20,
    padding: 4,
    marginBottom: 20,
  },
  userNameContainer: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  userName: {
    color: '#002366',
  },
  optionContainer: {
  marginTop: 20,
  gap: 15, 
},
 option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    paddingVertical: 12,
  },
  optionText: {
    color: 'white',
    marginLeft: 15,
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
  },
});

