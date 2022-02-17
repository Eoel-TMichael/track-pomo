import { useState, createContext, useMemo } from "react";
import { CommonActions } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";

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

    const handleModes = (pressedBtn: string, navigation): void => {
        timer(pressedBtn);
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

    const timer = (active: string): void => {
        switch (active) {
            case "work":
                setPomodoro(executing.work);
                updateExecute({ ...executing, active });
                break;
            case "short":
                setPomodoro(executing.short);
                updateExecute({ ...executing, active });
                break;
            case "long":
                setPomodoro(executing.long);
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
                }),
                [pomodoro]
            )}
        >
            {children}
        </PomodoroSettingsContext.Provider>
    );
}

export default PomodoroSettingsContextProvider;
