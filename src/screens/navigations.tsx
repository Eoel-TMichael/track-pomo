import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Home from "./Home";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import { ThemeContext } from "../context/theme";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
    const { themeData } = useContext(ThemeContext);

    const rightButton = (navigation) => (
        <TouchableOpacity
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate("Settings")}
        >
            <Feather name="settings" size={24} color={themeData.accentColor} />
        </TouchableOpacity>
    );

    const leftButton = (navigation) => (
        <TouchableOpacity
            style={{ paddingLeft: 20 }}
            onPress={() =>
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: "Home", params: { min: 25 } }],
                    })
                )
            }
        >
            <Feather
                name="arrow-left"
                size={24}
                color={themeData.accentColor}
            />
        </TouchableOpacity>
    );

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: themeData.primaryColor,
                        width: 240,
                    },
                    drawerLabelStyle: {
                        color: themeData.accentColor,
                    },
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        headerTitle: () => null,
                        headerStyle: {
                            backgroundColor: themeData.primaryColor,
                        },
                        headerShadowVisible: false,
                        headerRight: () => rightButton(navigation),
                        headerLeft: () => null,
                    })}
                />
                <Drawer.Screen
                    name="Settings"
                    component={Settings}
                    options={({ navigation }) => ({
                        headerTitle: () => null,
                        headerStyle: {
                            backgroundColor: themeData.primaryColor,
                        },
                        headerShadowVisible: false,
                        headerLeft: () => leftButton(navigation),
                        headerRight: () => null,
                    })}
                />
                <Drawer.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={({ navigation }) => ({
                        headerTitle: () => null,
                        headerStyle: {
                            backgroundColor: themeData.primaryColor,
                        },
                        headerShadowVisible: false,
                        headerLeft: () => leftButton(navigation),
                        headerRight: () => null,
                    })}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
