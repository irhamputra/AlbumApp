// Import lib
import React from "react";
import {Text, View} from "react-native";


// create a component

const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
      backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,

    }
};

// make component available to app
export default Header;
