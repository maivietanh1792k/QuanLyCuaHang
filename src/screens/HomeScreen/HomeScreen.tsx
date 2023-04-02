import * as React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDrawerStatus } from '@react-navigation/drawer';

import { verticalScale } from '../../components/Scales';

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
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => onPressMenu()}
                style={styles.menu}>
                <FontAwesomeIcon icon={faHouse} size={verticalScale(50)} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menu: {
        width: verticalScale(50),
        height: verticalScale(50),
        overflow: 'hidden',
        margin: verticalScale(16)
    }
})
// ... other code from the previous section