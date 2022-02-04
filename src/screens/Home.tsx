import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext.tsx";
import SetPomodoro from "../components/SetPomodoro.tsx";
import CustomButton from "../components/Button.tsx";
import CountdownAnimation from "../components/CountDownAnimation.tsx";
import styles from "../utils/styles.ts";

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

    useEffect(() => {
        updateExecute(executing);
    }, [executing, startAnimate]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pomodoro</Text>
            <Text>Be productive the right way.</Text>
            {pomodoro !== 0 ? (
                <>
                    <View style={styles.labels}>
                        <View>
                            <CustomButton
                                title="Work"
                                activeClass={
                                    executing.active === "work"
                                        ? styles.activeLabel
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
                                        ? styles.activeLabel
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
                                        ? styles.activeLabel
                                        : null
                                }
                                _callback={() => setCurrentTimer("long")}
                            />
                        </View>
                    </View>
                    <CustomButton title="Settings" _callback={SettingsBtn} />
                    <View style={styles.timerContainer}>
                        <View style={styles.timeWrapper}>
                            <CountdownAnimation
                                key={pomodoro}
                                timer={pomodoro}
                                animate={startAnimate}
                            >
                                {childrenText}
                            </CountdownAnimation>
                        </View>
                    </View>
                    <View style={styles.CustomButtonWrapper}>
                        <CustomButton
                            title="Start"
                            activeClass={!startAnimate ? styles.active : null}
                            _callback={startTimer}
                        />
                        <CustomButton
                            title="Pause"
                            activeClass={startAnimate ? styles.active : null}
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

export default Home;
