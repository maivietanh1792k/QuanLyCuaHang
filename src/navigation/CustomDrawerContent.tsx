// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';

import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

import { verticalScale } from '../components/Scales';
import { images } from '../constants/images';
import NavigationService from './NavigationService';
import { routes } from './Routes';

const CustomSidebarMenu = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/*Top Large Image */}
            {/* <View style={styles.user}> */}
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                {/* Nội dung của component */}
                <View style={styles.userRole}>
                    <Image
                        source={images.img_default_avatar}
                        style={styles.sideMenuProfileIcon}
                    />
                    <Text style={styles.userText}>Admin</Text>
                </View>
                <Text style={styles.userName}>Nguyen Van A</Text>
            </LinearGradient>
            {/* </View> */}
            <DrawerContentScrollView >
                <DrawerItem
                    label="Dashboard"
                    onPress={() => NavigationService.navigate(routes.HOME_SCREEN)}
                    style={styles.dashboard}
                    labelStyle={styles.lableStyle}
                />
                <DrawerItem
                    label="Products"
                    onPress={() => { NavigationService.navigate(routes.PRODUCT_SCREEN) }}
                    style={styles.dashboard}
                    labelStyle={styles.lableStyle}
                />
                <DrawerItem
                    label="Bills"
                    onPress={() => { }}
                    style={styles.dashboard}
                    labelStyle={styles.lableStyle}
                />

            </DrawerContentScrollView>
            <Text
                style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'grey'
                }}>
                Q-Fashion
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        height: verticalScale(200),
        // flex: 1
    },
    userRole: {
        flexDirection: 'row',
        // borderWidth: 1,
        flex: 1
    },
    userText: {
        // marginVertical: verticalScale(16),
        fontSize: verticalScale(16),
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    userName: {
        marginHorizontal: verticalScale(16),
        marginBottom: verticalScale(16),
        fontSize: verticalScale(20),
        color: 'white'
    },
    sideMenuProfileIcon: {
        resizeMode: 'stretch',
        width: verticalScale(120),
        height: verticalScale(120),
        borderRadius: verticalScale(120) / 2,
        borderColor: 'black',
        margin: verticalScale(16)
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dashboard: {
        // borderWidth: 1,
    },
    lableStyle: {
        fontSize: verticalScale(18),
        fontWeight: 'bold'
    }
});

export default CustomSidebarMenu;