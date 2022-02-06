import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext";
import { ThemeContext } from "../context/theme";
import SetPomodoro from "../components/SetPomodoro";
import CustomButton from "../components/Button";
import CountdownAnimation from "../components/CountDownAnimation";
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
    } = useContext(PomodoroSettingsContext);
    const { themeData, updateTheme } = useContext(ThemeContext);

    useEffect(() => {
        updateExecute(executing);
    }, [executing, startAnimate]);

    return (
        <View style={styles(themeData).container}>
            <Text style={styles(themeData).text}>Pomodoro</Text>
            <Text style={styles(themeData).subText}>
                Be productive the right way.
            </Text>
            {pomodoro !== 0 ? (
                <>
                    <View style={styles(themeData).labels}>
                        <View>
                            <CustomButton
                                title="Work"
                                activeClass={
                                    executing.active === "work"
                                        ? styles(themeData).activeLabel
                                        : null
                                }
                                _callback={() => setCurrentTimer("work")}
                            />
                        </View>
                        <View>
                            <CustomButton
                                title="Short Break"
                                activeClass={
                                    executing.active === "short"
                                        ? styles(themeData).activeLabel
                                        : null
                                }
                                _callback={() => setCurrentTimer("short")}
                            />
                        </View>
                        <View>
                            <CustomButton
                                title="Long Break"
                                activeClass={
                                    executing.active === "long"
                                        ? styles(themeData).activeLabel
                                        : null
                                }
                                _callback={() => setCurrentTimer("long")}
                            />
                        </View>
                    </View>
                    <CustomButton title="Settings" _callback={SettingsBtn} />
                    <View style={styles(themeData).timerContainer}>
                        <View style={styles(themeData).timeWrapper}>
                            <CountdownAnimation
                                key={pomodoro}
                                timer={pomodoro}
                                animate={startAnimate}
                            >
                                {childrenText}
                            </CountdownAnimation>
                        </View>
                    </View>
                    <View style={styles(themeData).CustomButtonWrapper}>
                        <CustomButton
                            title="Start"
                            activeClass={
                                !startAnimate ? styles(themeData).active : null
                            }
                            _callback={startTimer}
                        />
                        <CustomButton
                            title="Pause"
                            activeClass={
                                startAnimate ? styles(themeData).active : null
                            }
                            _callback={pauseTimer}
                        />
                    </View>
                </>
            ) : (
                <SetPomodoro />
            )}
        </View>
    );
}

const styles = StyleSheet.create((theme: SingleTheme) => ({
    container: {
        paddingTop: 5,
        color: theme.accentColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: theme.primaryColor,
    },
    text: {
        fontSize: 36,
        fontWeight: "bold",
        color: theme.accentColor,
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: theme.secondaryAccent,
        marginBottom: 5,
    },
    active: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: theme.secondaryAccent,
        borderRadius: 20,
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
