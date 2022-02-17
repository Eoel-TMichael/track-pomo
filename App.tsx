import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import PomodoroSettingsContextProvider from "./src/context/pomodoroSettingsContext";
import ThemeContextProvider from "./src/context/theme";
import MainNavigation from "./src/screens/navigations";

export default function App() {
    const [loaded] = useFonts({
        BarlowCondensedBold: require("./assets/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf"),
        BarlowCondensedLight: require("./assets/fonts/Barlow_Condensed/BarlowCondensed-Light.ttf"),
        DosisBold: require("./assets/fonts/Dosis/Dosis-Bold.ttf"),
        DosisLight: require("./assets/fonts/Dosis/Dosis-Light.ttf"),
        Shizuru: require("./assets/fonts/Shizuru/Shizuru-Regular.ttf"),
        Caveat: require("./assets/fonts/Caveat-Regular.ttf"),
    });
    if (!loaded) {
        return <AppLoading />;
    }
    return (
        <PomodoroSettingsContextProvider>
            <ThemeContextProvider>
                <MainNavigation />
                <StatusBar style="auto" />
            </ThemeContextProvider>
        </PomodoroSettingsContextProvider>
    );
}
