import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import R from '../components/R';
import BillScreen from '../screens/BillScreen/BillScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import CustomDrawerContent from './CustomDrawerContent';
import { routes } from './Routes';

export const navigationRef: any = React.createRef();
export const isMountedRef: any = React.createRef();
const Drawer = createDrawerNavigator();

const MainStackDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                overlayColor: '0.7',
                drawerPosition: 'left',
                drawerType: 'front',
                drawerStyle: {
                    width: R.DEVICE_WIDTH * 3 / 4
                }
            }}
            drawerContent={() => <CustomDrawerContent />}
        >
            <Drawer.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
            <Drawer.Screen name={routes.PRODUCT_SCREEN} component={ProductScreen} />
            <Drawer.Screen name={routes.BILL_SCREEN} component={BillScreen} />
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
    );
}
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Stack.Navigator>
    );
}
export { AuthStack, MainStackDrawer };
