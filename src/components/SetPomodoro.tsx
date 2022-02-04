import { useContext, useState } from "react";
import { TextInput, View, Button } from "react-native";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext.tsx";
import styles from "../utils/styles.ts";

function SetPomodoro() {
    /* eslint-disable no-unused-vars */
    const [workInput, setWorkInput] = useState();
    const [shortInput, setShortInput] = useState();
    const [longInput, setLongInput] = useState();
    /* eslint-enable no-unused-vars */

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: "work",
    });

    const { updateExecute } = useContext(PomodoroSettingsContext);

    const handleWorkChange = (input) => {
        setNewTimer({
            ...newTimer,
            work: parseInt(input),
        });
    };
    const handleShortChange = (input) => {
        setNewTimer({
            ...newTimer,
            short: parseInt(input),
        });
    };
    const handleLongChange = (input) => {
        setNewTimer({
            ...newTimer,
            long: parseInt(input),
        });
    };

    const handleSubmit = () => {
        updateExecute(newTimer);
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleWorkChange}
                    value={newTimer.work}
                    placeholder="Work Time"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleShortChange}
                    value={newTimer.short}
                    placeholder="Short Brakes Time"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleLongChange}
                    value={newTimer.long}
                    placeholder="Long Brake Time"
                    keyboardType="numeric"
                />
            </View>
            <Button title="Set Timer" onPress={handleSubmit} />
        </View>
    );
}

export default SetPomodoro;
