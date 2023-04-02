import * as React from 'react';

import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    faFileAlt,
    faHouse,
    faMoneyBill,
    faProcedures,
    faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDrawerStatus } from '@react-navigation/drawer';

import { verticalScale } from '../../components/Scales';
import TextBase from '../../components/TextBase';
import { images } from '../../constants/images';

interface Props {
    navigation: any
}
const HomeScreen = (props: Props) => {
    const { navigation } = props;
    const isDrawerOpen = useDrawerStatus() === 'open';
    const onPressMenu = () => {
        if (isDrawerOpen) {
            navigation.closeDrawer();
        } else {
            navigation.openDrawer();
        }
    }
    const renderDashboard = () => {
        return <>
            <View style={styles.dashboard}>
                <View style={styles.rowDash}>
                    <LinearGradient
                        colors={['#F7A1FE', '#F799FF', '#EF75FA']}
                        style={[styles.dash, {}]}>
                        <FontAwesomeIcon icon={faMoneyBill} size={verticalScale(30)} color='#F96868' style={{ marginBottom: verticalScale(8) }} />
                        <TextBase title={'Money'} style={styles.text} />
                        <TextBase title={'25000$'} style={styles.text1} />
                    </LinearGradient>
                    <LinearGradient
                        colors={['#99E7FF', '#89DCFF', '#73E6FF']}
                        style={[styles.dash, {}]}>
                        <FontAwesomeIcon icon={faFileAlt} size={verticalScale(30)} color='#F96868' style={{ marginBottom: verticalScale(8) }} />
                        <TextBase title={'Bills'} style={styles.text} />
                        <TextBase title={'26'} style={styles.text1} />
                    </LinearGradient>
                </View>
                <View style={styles.rowDash}>

                    <LinearGradient
                        colors={['#FEFFB7', '#FDFFA1', '#F6FF92']}
                        style={[styles.dash, {}]}>
                        <FontAwesomeIcon icon={faProcedures} size={verticalScale(30)} color='#F96868' style={{ marginBottom: verticalScale(8) }} />
                        <TextBase title={'Products'} style={styles.text} />
                        <TextBase title={'156'} style={styles.text1} />
                    </LinearGradient>
                    <LinearGradient
                        colors={['#B2FFC8', '#9DFFA7', '#86FF8B']}
                        style={[styles.dash, {}]}>
                        <FontAwesomeIcon icon={faUserFriends} size={verticalScale(30)} color='#F96868' style={{ marginBottom: verticalScale(8) }} />
                        <TextBase title={'Customers'} style={styles.text} />
                        <TextBase title={'30'} style={styles.text1} />
                    </LinearGradient>
                </View>
            </View>
        </>
    }
    const renderBillsToday = () => {
        return <>
            <TextBase title={'Today Bills'} style={{
                fontSize: verticalScale(20),
                margin: verticalScale(16)
            }} />
            <ScrollView style={styles.bills}>
            </ScrollView>
        </>
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => onPressMenu()}
                    style={styles.menu}>
                    <FontAwesomeIcon icon={faHouse} size={verticalScale(30)} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={images.img_default_avatar}
                        style={styles.sideMenuProfileIcon}
                    />
                    <TextBase title={'Nguyen Van A'} style={{
                        fontSize: verticalScale(18),
                        marginHorizontal: verticalScale(8)
                    }} />
                </View>
            </View>
            {renderDashboard()}
            {renderBillsToday()}
        </SafeAreaView>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    menu: {
        width: verticalScale(30),
        height: verticalScale(30),
        overflow: 'hidden',
        // margin: verticalScale(16)
    },
    header: {
        flexDirection: 'row',
        padding: verticalScale(16),
        backgroundColor: 'transperent',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sideMenuProfileIcon: {
        resizeMode: 'stretch',
        width: verticalScale(40),
        height: verticalScale(40),
        borderRadius: verticalScale(40) / 2,
        borderColor: 'black',
    },
    dashboard: {
        // borderWidth: 1,
        margin: verticalScale(16)
    },
    dash: {
        width: verticalScale(150),
        height: verticalScale(150),
        margin: verticalScale(16),
        borderRadius: verticalScale(16),
        padding: verticalScale(16),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    rowDash: {
        flexDirection: 'row'
    },
    text: {
        color: '#3E2D2D',
        fontSize: verticalScale(18),
        marginVertical: verticalScale(4)
    },
    text1: {
        color: '#3E2D2D',
        fontSize: verticalScale(20),
        marginVertical: verticalScale(4)
    },
    bills: {
        marginHorizontal: verticalScale(16),
        flex: 1,
        // borderWidth: 1
    }
})
// ... other code from the previous section