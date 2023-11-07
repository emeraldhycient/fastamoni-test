import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dashboard from "../screens/dashboard/dashboard";
import Colors from "../theme/colors";
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this package



const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  let { Navigator, Screen } = Tab;
  return (
    <Navigator
      activeColor={Colors.primary}
      inactiveColor={Colors.gray}
      barStyle={{ backgroundColor: Colors.white }}
    >
      <Screen
        name="home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color,focused }: any) => (
            focused ?
              <Image source={require("../../assets/images/bottombar/ICON.png")} style={{ height: 30, width: 30 }} />
              :
              <Image source={require("../../assets/images/bottombar/home-in.png")} style={{ height: 20, width: 20 }} />
          ),
        } as never}
      />
     
      <Screen
        name="stream"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: -13, // space from bottombar
                height: 40,
                width: 40,
                borderRadius: 68,
                // backgroundColor: 'blue', // your color
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={require("../../assets/images/bottombar/stream.png")} style={{ height: 50, width: 50 }} />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
     
      <Screen
        name="profile"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color, focused }: any) => (
              <Image source={require("../../assets/images/bottombar/profile.png")} style={{ height: 30, width: 30 }} />
          ),
        } as never}
      />
     
    </Navigator>
  );
}


export default BottomTab;
