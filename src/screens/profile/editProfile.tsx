import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../components/common/Header'
import Colors from '../../theme/colors'
import Balance from '../../components/dashboard/Balance'
import CustomText from '../../components/common/CustomText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useAuthenticationState from '../../states/zustandStore/authentication'
import { useEffect, useState, useLayoutEffect } from 'react'
import userService from '../../services/user/users.service'
import Alert from '../../helpers/alert'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import Button from '../../components/common/button'
import CustomTextInput from '../../components/common/CustomTextInput'

const EditProfile = ({ navigation }: any) => {
    const [name, setname] = useState("")
    const [job, setjob] = useState("")
    const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);

    const [isLoading, setisLoading] = useState(false)

    const updateSelf = async () => {
        if (job && name) {
            setisLoading(true)
            try {
                const req = await userService.updateAccount({ name, job })
                setisLoading(false)
                if (req.status === 200) {
                    Alert.success("update sucessfull")
                    setIsAuthenticated(false)
                }
            } catch (error: any) {
                setisLoading(false)
                Alert.error(error?.response?.data?.error)
            }

        } else {
            Alert.error("please enter job and name")
        }
    }
//TODO: add proper loading in real app on all page that needs it
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title={`lets make an edit`} />
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <CustomText style={{ marginBottom: 10 }}>Email</CustomText>
                <CustomTextInput value={name} onChangeText={(text: string) => setname(text)} placeholder="Enter your name" />
               
                <CustomText style={{ marginBottom: 10 }}>Job</CustomText>
                <CustomTextInput value={job} onChangeText={(text: string) => setjob(text)} placeholder="Enter your job" style={{marginBottom:30}} />
               
                {
                    !isLoading &&
                    <Button title='update' onPress={updateSelf} br={6} h={50} color={Colors.white} bg={Colors.primary} />
                }
            </View>
        </View>

    )
}

export default EditProfile

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingVertical: 20,
        backgroundColor: '#fff',
    },
    productGrid: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingBottom: '5%',
    }
})