import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../../theme/colors'
import CustomText from '../common/CustomText'
import Button from '../common/button'
import useAuthenticationState from '../../states/zustandStore/authentication'
import useMoneyFormatter from '../../hooks/useMoneyFormatter'

const Balance = ({ balance }: { balance: number }) => {

    const { formattedValue, format } = useMoneyFormatter()
    useEffect(() => {
        format(balance)
        console.log("formattedValue", formattedValue)

    }, [format])



    return (
        <View>
            <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                <View style={styles.card}>
                    <View style={{ height: 65 }}>
                        <CustomText style={[styles.title]}>{formattedValue}</CustomText>
                        <CustomText style={{ fontSize: 12, color: 'rgba(231, 244, 251, 1)', marginVertical: 5 }}>Wallet Balance</CustomText>
                    </View>
                    <View style={{ flexDirection: 'column', height: 65 }}>
                        <CustomText style={{ fontSize: 14, color: 'rgba(231, 244, 251, 1)', textAlign: "right" }}>Bonus Earned</CustomText>
                        <CustomText style={{ fontSize: 12, color: Colors.white, textAlign: "right", fontWeight: '600', marginVertical: 5 }}>₦ 2,500.00</CustomText>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: '6%', marginVertical: 10 }}>
                <View style={{ width: "48%" }}>
                    <Button onPress={() => { }} br={8} h={40} bg={Colors.primary} >
                        <CustomText color={Colors.white}>Add Money</CustomText>
                    </Button>
                </View>
                <View style={{ width: "48%" }}>
                    <Button onPress={() => { }} br={8} h={40} bg={Colors.primary} >
                        <CustomText color={Colors.white}>Refer A Person</CustomText>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 150,
        backgroundColor: Colors.primary,
        marginHorizontal: "auto",
        borderRadius: 16,
        padding: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        color: Colors.white
    },
})