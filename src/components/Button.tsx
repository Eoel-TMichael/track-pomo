import React from "react";
import { Button } from "react-native";

function CustomButton({ title, activeClass, _callback }) {
    return <Button style={activeClass} onPress={_callback} title={title} />;
}
export default CustomButton;
