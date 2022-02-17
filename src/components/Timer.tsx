import { useContext, useState } from "react";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import Timer from "react-compound-timer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext";
import { ThemeContext } from "../context/theme";

interface PomodoroTimerProps {
    minute: number;
    secondaryColor: string;
    accentColor: string;
}

export default function PomodoroTimer({
    minute,
    secondaryColor,
    accentColor,
    navigation,
    execute,
}: PomodoroTimerProps) {
    const [started, setStart] = useState(false);
    const [min, setMin] = useState(minute);
    const { timer, handleModes, changeScreenOrientation } = useContext(
        PomodoroSettingsContext
    );
    const { themeData } = useContext(ThemeContext);

    const controlTimer = (resume, pause) => {
        if (started) {
            setStart(!started);
            pause();
        } else {
            setStart(!started);
            resume();
        }
    };

    const controlTimerRestart = (pause, reset) => {
        if (started) {
            pause();
            reset();
            setStart(!started);
        } else {
            reset();
        }
    };

    return (
        <View style={styles(themeData).container}>
            <View style={styles(themeData).modeContainer}>
                <TouchableOpacity
                    style={styles(themeData).btn}
                    onPress={() => handleModes("work", navigation)}
                >
                    <Text
                        style={
                            execute.active === "work"
                                ? styles(themeData).activeModeText
                                : styles(themeData).modeText
                        }
                    >
                        Work
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles(themeData).btn}
                    onPress={() => handleModes("short", navigation)}
                >
                    <Text
                        style={
                            execute.active === "short"
                                ? styles(themeData).activeModeText
                                : styles(themeData).modeText
                        }
                    >
                        Short Brake
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles(themeData).btn}
                    onPress={() => handleModes("long", navigation)}
                >
                    <Text
                        style={
                            execute.active === "long"
                                ? styles(themeData).activeModeText
                                : styles(themeData).modeText
                        }
                    >
                        Long Brake
                    </Text>
                </TouchableOpacity>
            </View>

            <Timer
                initialTime={min * 1000 * 60}
                direction="backward"
                timeToUpdate={10}
                startImmediately={false}
                checkpoints={[
                    {
                        time: 0,
                        callback: () => {
                            // TODO use sound and Notifications to notify them
                            switch (execute.active) {
                                case "work":
                                    handleModes("short", navigation);
                                    break;
                                case "short":
                                    handleModes("long", navigation);

                                    break;
                                case "long":
                                    handleModes("work", navigation);

                                    break;
                                default:
                                    break;
                            }
                        },
                    },
                ]}
            >
                {({ resume, pause, reset }) => (
                    <View>
                        <Text
                            style={[
                                styles(themeData).timer,
                                { color: secondaryColor },
                            ]}
                        >
                            <Timer.Minutes /> : <Timer.Seconds />
                        </Text>
                        <View style={styles(themeData).btnContainer}>
                            <TouchableOpacity
                                style={styles(themeData).btn}
                                onPress={() => controlTimer(resume, pause)}
                            >
                                <Ionicons
                                    name={started ? "md-pause" : "play"}
                                    size={24}
                                    color={accentColor}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles(themeData).btn}
                                onPress={() =>
                                    controlTimerRestart(pause, reset)
                                }
                            >
                                <Fontisto
                                    name="undo"
                                    size={24}
                                    color={accentColor}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles(themeData).btn}
                                onPress={changeScreenOrientation}
                            >
                                <MaterialCommunityIcons
                                    name="lock-reset"
                                    size={24}
                                    color={accentColor}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Timer>
        </View>
    );
}

const styles = StyleSheet.create((theme) => ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: -20,
    },
    modeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "90%",
    },
    modeBtn: {
        padding: 20,
    },
    modeText: {
        color: theme.secondaryAccent,
    },
    activeModeText: {
        color: theme.accentColor,
        fontWeight: "bold",
        fontSize: 20,
    },
    timer: {
        alignSelf: "center",
        fontSize: 200,
        fontFamily: "BarlowCondensedBold",
    },
    btnContainer: {
        flexDirection: "row",
        width: "95%",
        justifyContent: "space-evenly",
    },
    btn: {
        paddingVertical: 20,
        paddingHorizontal: 40,
    },
}));
