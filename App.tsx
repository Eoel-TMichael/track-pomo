import React from "react";
import { StatusBar } from "expo-status-bar";
import PomodoroSettingsContextProvider from "./src/context/pomodoroSettingsContext.tsx";
import Home from "./src/screens/Home.tsx";

export default function App() {
    return (
        <PomodoroSettingsContextProvider>
            <Home />
            <StatusBar style="auto" />
        </PomodoroSettingsContextProvider>
    );
}
