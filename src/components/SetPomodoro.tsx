import { useContext, useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext";
import { ThemeContext } from "../context/theme";

function SetPomodoro() {
    /* eslint-disable no-unused-vars */
    const [workInput, setWorkInput] = useState("");
    const [shortInput, setShortInput] = useState("");
    const [longInput, setLongInput] = useState("");
    /* eslint-enable no-unused-vars */

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: "work",
    });

    const { updateExecute } = useContext(PomodoroSettingsContext);
    const { themeData } = useContext(ThemeContext);

    const handleWorkChange = (input: string) => {
        setWorkInput(input);
        setNewTimer({
            ...newTimer,
            work: parseInt(workInput),
        });
    };
    const handleShortChange = (input: string) => {
        setShortInput(input);
        setNewTimer({
            ...newTimer,
            short: parseInt(shortInput),
        });
    };
    const handleLongChange = (input: string) => {
        setLongInput(input);
        setNewTimer({
            ...newTimer,
            long: parseInt(longInput),
        });
    };

    const handleSubmit = () => {
        updateExecute(newTimer);
    };

    return (
        <View style={styles(themeData).formContainer}>
            <View style={styles(themeData).inputWrapper}>
                <TextInput
                    style={styles(themeData).input}
                    onChangeText={handleWorkChange}
                    value={workInput}
                    placeholder="Work Time"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles(themeData).input}
                    onChangeText={handleShortChange}
                    value={shortInput}
                    placeholder="Short Brakes Time"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles(themeData).input}
                    onChangeText={handleLongChange}
                    value={longInput}
                    placeholder="Long Brake Time"
                    keyboardType="numeric"
                />
            </View>
            <Button title="Set Timer" onPress={handleSubmit} />
        </View>
    );
}
const styles = StyleSheet.create((theme) => ({
    inputWrapper: {
        flexDirection: "row",
        height: 30,
        justifyContent: "space-between",
        margin: 20,
        // width: 30,
        // padding: 20,
        // backgroundColor: "#0C0E1B",
        // color: "#C9CCEA",
        // borderRadius: 100,
        // marginRight: 10,
        // textAlign: "center",
        // fontSize: 15,
    },
    input: {
        height: 40,
        width: "30%",
        paddingLeft: 5,
        // backgroundColor: "#0C0E1B",
        // color: "#C9CCEA",
        borderWidth: 1,
        borderColor: "#ccc",
        // borderRadius: 100,
        // marginRight: 10,
        // textAlign: "center",
        // fontSize: 50,
    },
    formContainer: {
        textAlign: "center",
    },
}));

export default SetPomodoro;
