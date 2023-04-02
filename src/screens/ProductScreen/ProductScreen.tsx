import * as React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { verticalScale } from '../../components/Scales';

interface Props {
    navigation: any
}
const ProductScreen = (props: Props) => {
    const onPressMenu = () => {

    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => onPressMenu()}
                style={styles.menu}>
                <FontAwesomeIcon icon={faHouse} size={verticalScale(50)} />
            </TouchableOpacity>
            <Text>ProductScreen</Text>
        </SafeAreaView>
    );
}
export default ProductScreen;
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