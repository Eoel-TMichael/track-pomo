import React, { useContext } from "react";
import { Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext.tsx";
import { ThemeContext } from "../context/theme";

function CountdownAnimation({ key, timer, animate, childrenText }) {
    const { stopAimate } = useContext(PomodoroSettingsContext);
    const { themeData } = useContext(ThemeContext);
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[themeData.secondaryColor]}
            strokeWidth={6}
            size={220}
            trailColor={themeData.secondaryAccent}
            onComplete={() => {
                stopAimate();
            }}
        >
            <Text>{childrenText}</Text>
        </CountdownCircleTimer>
    );
}

export default CountdownAnimation;
