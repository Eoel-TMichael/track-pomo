import { useState, createContext } from "react";
import { SetTimerObject } from "../components/SetPomodoro";

export const PomodoroSettingsContext = createContext();
// export const context = React.createContext();

function PomodoroSettingsContextProvider({ children }) {
    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({
        work: 1,
        short: 5,
        long: 15,
        active: "work",
    });
    const [startAnimate, setStartAnimate] = useState(false);

    const setCurrentTimer = (activeState: string) => {
        updateExecute({
            ...executing,
            active: activeState,
        });
        setTimerTime(executing);
    };

    // start animation fn
    function startTimer() {
        setStartAnimate(true);
    }
    // pause animation fn
    function pauseTimer() {
        setStartAnimate(false);
    }

    function toggleAnimation() {
        setStartAnimate(!startAnimate);
    }

    // pass time to counter
    const childrenText = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return `${minutes}:${seconds}`;
    };

    // clear session storage
    const SettingsBtn = () => {
        setExecuting({});
        setPomodoro(0);
    };

    const updateExecute = (updatedSettings: SetTimerObject) => {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
    };

    const setTimerTime = (evaluate: SetTimerObject) => {
        console.log("EVALUATE " + evaluate.active);
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

    function stopAnimate() {
        setStartAnimate(false);
    }

    return (
        <PomodoroSettingsContext.Provider
            value={{
                pomodoro,
                executing,
                updateExecute,
                startAnimate,
                startTimer,
                pauseTimer,
                childrenText,
                SettingsBtn,
                setCurrentTimer,
                stopAnimate,
                toggleAnimation,
            }}
        >
            {children}
        </PomodoroSettingsContext.Provider>
    );
}

export default PomodoroSettingsContextProvider;
