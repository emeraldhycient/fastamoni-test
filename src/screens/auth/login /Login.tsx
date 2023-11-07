import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableRipple } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import useAuthenticationState from '../../../states/zustandStore/authentication';

const Login = ({ navigation }: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);


  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <CustomHeader title='Sign in to fastamoni' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <CustomText style={{ marginBottom: 10 }}>Email Address</CustomText>
        <CustomTextInput placeholder="Enter your email address" />
        <CustomText style={{ marginVertical: 10 }}>Password </CustomText>
        <CustomTextInput placeholder="Password" right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
              return false;
            }}
            color={Colors.gray}
          />
        } />
        <View style={{ width: "100%", marginHorizontal: "auto", flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
          <Button title='Sign in to your account' onPress={() => setIsAuthenticated(true)} br={6} h={50} color={Colors.white} bg={Colors.primary} />

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
            <TouchableRipple onPress={() => navigation.navigate("SignUp")}>
              <View style={{ flexDirection: "row" }}>
                <CustomText style={{ marginVertical: 10, textAlign: "center", fontSize: 14, fontWeight: "400" }}>Don't have an account? </CustomText>
                <TouchableRipple onPress={() => navigation.navigate("SignUp")}>
                  <CustomText style={{ marginVertical: 10, textAlign: "center", fontSize: 14, fontWeight: "400",color:Colors.primary   }}>Sign up</CustomText>
                </TouchableRipple>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => navigation.navigate("ForgotPassword")}>
              <CustomText style={{ marginVertical: 10, textAlign: "center", fontSize: 14, fontWeight: "400" }}>I forgot my password </CustomText>
            </TouchableRipple>

          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})