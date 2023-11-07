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

const Dashboard = ({ navigation }: any) => {
    const setUser = useAuthenticationState((state: any) => state.setUser);
    const [user, setuser] = useState("")
    
    const getUser = async () => {

            try {
                const req = await userService.getUser()
                if (req.status === 200) {
                    setUser(req?.data?.data)
                    setuser(req?.data?.data)
                }
            } catch (error: any) {
                Alert.error(error?.response?.data?.error)
            }
    }

    useLayoutEffect(() => {
        (async() =>[
            getUser()
        ])()
    })

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title={`Hello ${user?.first_name} 😁`} />
            <ScrollView style={{ backgroundColor: Colors.white, width: "100%" }}>
                <Balance balance={100} />
                <View style={styles.headerContainer}>
                    <CustomText style={[{ fontSize: 14, color: Colors.gray }]}>Activites</CustomText>
                    <CustomText style={[{ fontSize: 14, color: Colors.primary, fontWeight: 'bold' }]}>See more</CustomText>
                </View>
               
               
              
            </ScrollView>
        </View>

    )
}

export default Dashboard

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