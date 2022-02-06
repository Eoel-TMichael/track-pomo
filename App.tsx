import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import PomodoroSettingsContextProvider from "./src/context/pomodoroSettingsContext";
import ThemeContextProvider from "./src/context/theme";
import MainNavigation from "./src/screens/navigations";

export default function App() {
    return (
        <PomodoroSettingsContextProvider>
            <ThemeContextProvider>
                <MainNavigation />
                <StatusBar style="auto" />
            </ThemeContextProvider>
        </PomodoroSettingsContextProvider>
    );
}
