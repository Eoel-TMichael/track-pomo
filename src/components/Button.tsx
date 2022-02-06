import React from "react";
import { TouchableOpacity, Text } from "react-native";

function CustomButton({ title, activeClass, _callback }) {
    return (
        <TouchableOpacity style={activeClass} onPress={_callback}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
