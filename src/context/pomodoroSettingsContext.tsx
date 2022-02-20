import { useState, createContext, useMemo } from "react";
import { CommonActions } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { Audio } from "expo-av";

interface TimeFormat {
    work: number;
    short: number;
    long: number;
    active: string;
}

export const PomodoroSettingsContext = createContext({});

function PomodoroSettingsContextProvider({ children }) {
    const [pomodoro, setPomodoro] = useState(25);
    const [executing, setExecuting] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: "work",
    });
    // TODO with this date we can make a graph for each day!
    const [pomodoroIteration, setPomodoroIteration] = useState({
        work: 0,
        short: 0,
        long: 0,
        date: null,
        executing,
    });

    const setCurrentTimer = (activeState: string): void => {
        updateExecute({
            ...executing,
            active: activeState,
        });
        setTimerTime(executing);
    };

    const updateExecute = (updatedSettings: TimeFormat): void => {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
    };

    async function changeScreenOrientation(): Promise<void> {
        const orientation = await ScreenOrientation.getOrientationAsync();
        if (orientation !== ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
            );
        } else {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
        }
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/music/bell.mp3")
        );

        await sound.playAsync();
    }

    const handleModes = (pressedBtn: string, navigation): void => {
        timer(pressedBtn);
        console.log("HANDLE BTN" + pressedBtn);
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {
                        name: "Home",
                        params: { min: pomodoro, active: executing.active },
                    },
                ],
            })
        );
    };

    const setTimerTime = (evaluate: TimeFormat) => {
        switch (evaluate.active) {
            case "work":
                setPomodoro(evaluate.work);
                break;
            case "short":
                setPomodoro(evaluate.short);
                break;
            case "long":
                setPomodoro(evaluate.long);
                break;
            default:
                setPomodoro(0);
                break;
        }
    };

    const pomodoroLogic = (active: stirng): void => {
        switch (active) {
            case "work":
                setPomodoro(executing.short);
                break;
            case "short":
                setPomodoro(executing.long);
                break;
            case "long":
                setPomodoro(executing.work);
                break;
            default:
                setPomodoro(0);
                break;
        }
    };

    const timer = (active: string): void => {
        console.log("TIMER" + active);
        switch (active) {
            case "work":
                setPomodoroIteration({ ...pomodoroIteration });
                updateExecute({ ...executing, active });
                break;
            case "short":
                setPomodoroIteration({
                    ...pomodoroIteration,
                });

                updateExecute({ ...executing, active });
                break;
            case "long":
                setPomodoroIteration({
                    ...pomodoroIteration,
                });

                updateExecute({ ...executing, active });
                break;
            default:
                setPomodoro(0);
                break;
        }
    };

    return (
        <PomodoroSettingsContext.Provider
            value={useMemo(
                () => ({
                    pomodoro,
                    executing,
                    updateExecute,
                    setCurrentTimer,
                    changeScreenOrientation,
                    timer,
                    handleModes,
                    playSound,
                    pomodoroLogic,
                    setTimerTime,
                }),
                [pomodoro]
            )}
        >
            {children}
        </PomodoroSettingsContext.Provider>
    );
}

export default PomodoroSettingsContextProvider;
