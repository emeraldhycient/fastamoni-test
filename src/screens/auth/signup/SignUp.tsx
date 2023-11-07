import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import useAuthenticationState from '../../../states/zustandStore/authentication';
import Alert from '../../../helpers/alert';
import authService from '../../../services/auth/auth.service';

const SignUp = ({ navigation }: any) => {
  const [checked, setChecked] = React.useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);

  const [eemail, seteemail] = useState("")
  const [password, setpassword] = useState("")

  const [isLoading, setisLoading] = useState(false)

  const handlelogin = async () => {
    if (password && eemail) {
      setisLoading(true)
      try {
        const req = await authService.createAccount({ email: eemail, password })
        setisLoading(false)
        if (req.status === 200) {
          Alert.success("registration sucessfull")
          navigation.navigate("Login")
        }
      } catch (error: any) {
        setisLoading(false)
        Alert.error(error?.response?.data?.error)
      }

    } else {
      Alert.error("please enter password and email")
    }
  }


  //TODO: switch all validation to formik and yup in real app


  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <CustomHeader title='Create Account' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <CustomText style={{ marginBottom: 10 }}>Email</CustomText>
        <CustomTextInput value={eemail} onChangeText={(text: string) => seteemail(text)} placeholder="Enter your email address" />
        <CustomText style={{ marginVertical: 10 }}>Create Password </CustomText>
        <CustomTextInput value={password} onChangeText={(text: string) => setpassword(text)} placeholder="Password" right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
              return false;
            }}
            color={Colors.gray}
          />
        } />
        <View style={{ width: "100%", marginHorizontal: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 }}>
          <Switch
            value={checked}
            onValueChange={() => {
              setChecked(!checked);
            }}
            color={Colors.accent}
          />
          <View style={{ width: "90%" }}>
            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>By continuing, you agree to our  <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Terms of Service , Broadcaster Agreement & Privacy Policy</CustomText></CustomText>
          </View>
        </View>
        {
          !isLoading &&
          <Button title='Get Started' onPress={handlelogin} br={6} h={50} color={Colors.white} bg={Colors.primary} />
        }
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})