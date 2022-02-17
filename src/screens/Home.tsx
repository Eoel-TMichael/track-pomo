import { useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext";
import { ThemeContext } from "../context/theme";
import { SingleTheme } from "../utils/theme/theme";
import PomodoroTimer from "../components/Timer";

function Home({ navigation }) {
    const { pomodoro, executing, updateExecute } = useContext(
        PomodoroSettingsContext
    );
    const { themeData } = useContext(ThemeContext);

    return (
        <View style={styles(themeData).container}>
            <View style={styles(themeData).helper}>
                <Svg
                    width="67"
                    height="70"
                    viewBox="0 0 67 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M9.49991 69C31 57 38.0545 29.3066 20.0006 20.5C-0.499926 10.5 -4.00005 30.5 9.49999 37.5C33.7222 50.0596 60 28.5 60 7.5"
                        stroke={themeData.secondaryAccent}
                    />
                    <Path
                        d="M60.6357 1.03377L64.8491 10.5336L54.5153 9.43261L60.6357 1.03377Z"
                        fill={themeData.secondaryAccent}
                    />
                </Svg>
                <Text style={styles(themeData).helperText}>
                    Hello, Press here to set custom pomodoro time
                </Text>
            </View>

            <PomodoroTimer
                minute={pomodoro}
                navigation={navigation}
                execute={executing}
                updateExecute={updateExecute}
                secondaryColor={themeData.secondaryColor}
                accentColor={themeData.accentColor}
            />
        </View>
    );
}

const styles = StyleSheet.create((theme: SingleTheme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.primaryColor,
    },
    helper: {
        position: "absolute",
        top: 0,
        right: 30,
        alignItems: "flex-end",
    },
    helperText: {
        fontFamily: "Caveat",
        fontSize: 20,
        color: theme.secondaryAccent,
        transform: [{ rotate: "10deg" }],
    },
}));

export default Home;
