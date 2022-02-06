import { useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext";
import { ThemeContext } from "../context/theme";
import { SingleTheme } from "../utils/theme/theme";

function Home() {
    const {
        pomodoro,
        executing,
        startAnimate,
        childrenText,
        startTimer,
        pauseTimer,
        updateExecute,
        setCurrentTimer,
        SettingsBtn,
        stopAnimate,
        toggleAnimation,
    } = useContext(PomodoroSettingsContext);
    const { themeData } = useContext(ThemeContext);

    useEffect(() => {
        updateExecute(executing);
    }, [executing, startAnimate]);

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return `${minutes}:${seconds}`;
    };

    return (
        <View style={styles(themeData).container}>
            <TouchableOpacity onPress={toggleAnimation}>
                <CountdownCircleTimer
                    key={pomodoro}
                    isPlaying={startAnimate}
                    duration={pomodoro * 60}
                    colors={[themeData.secondaryColor]}
                    strokeWidth={10}
                    rotation="counterclockwise"
                    size={220}
                    trailColor={themeData.secondaryAccent}
                    onComplete={() => {
                        stopAnimate();
                    }}
                >
                    {({ remainingTime }) => (
                        <View style={styles(themeData).row}>
                            <Text style={styles(themeData).subText}>
                                {executing.active}
                            </Text>

                            <Text style={styles(themeData).text}>
                                {remainingTime}
                            </Text>
                        </View>
                    )}
                </CountdownCircleTimer>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create((theme: SingleTheme) => ({
    container: {
        paddingTop: 5,
        color: theme.accentColor,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: theme.primaryColor,
    },
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 65,
        fontWeight: "bold",
        color: theme.accentColor,
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: theme.accentColor,
        marginBottom: 5,
    },
    active: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        color: theme.accentColor,
    },
    labels: {
        flexDirection: "row",
        display: "flex",
        textTransform: "uppercase",
        fontSize: 15,
        padding: 0.1,
        margin: 10,
        borderRadius: 20,
    },
    activeLabel: {
        padding: 10,
        color: theme.accentColor,
        backgroundColor: theme.secondaryAccent,
    },
    timerContainer: {
        display: "flex",
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    timeWrapper: {
        display: "flex",
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    CustomButtonWrapper: {
        display: "flex",
        alignItems: "center",
        padding: 6,
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-evenly",
    },
}));

export default Home;
