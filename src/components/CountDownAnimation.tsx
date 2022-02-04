import React, { useContext } from "react";
import { Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { PomodoroSettingsContext } from "../context/pomodoroSettingsContext.tsx";

function CountdownAnimation({ key, timer, animate, childrenText }) {
    const { stopAimate } = useContext(PomodoroSettingsContext);
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[
                ["#f1f745", 0.33],
                ["#3bbcef", 0.33],
                ["#5af43f", 0.33],
            ]}
            strokeWidth={6}
            size={220}
            trailColor="#e5e5e5"
            onComplete={() => {
                stopAimate();
            }}
        >
            <Text>{childrenText}</Text>
        </CountdownCircleTimer>
    );
}

export default CountdownAnimation;
