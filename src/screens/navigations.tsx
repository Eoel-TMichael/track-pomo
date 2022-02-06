import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useContext } from "react";
import Home from "./Home";
import SetPomodoro from "../components/SetPomodoro";
import { ThemeContext } from "../context/theme";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
    const { themeData } = useContext(ThemeContext);
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: themeData.primaryColor,
                        width: 240,
                    },
                }}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Tracks" component={SetPomodoro} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
