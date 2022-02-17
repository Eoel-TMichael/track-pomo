import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SetPomodoro from "../components/SetPomodoro";
import { ThemeContext } from "../context/theme";
import { SingleTheme } from "../utils/theme/theme";

export default function Settigs({ navigation }) {
    const { themeData, themes, getTheme, updateTheme } =
        useContext(ThemeContext);
    return (
        <View style={styles(themeData).container}>
            <ScrollView>
                <Text style={styles(themeData).header}>Settings</Text>
                <View style={styles(themeData).separator} />
                <Text style={styles(themeData).text}>Set Pomodoro</Text>
                <View style={styles(themeData).separator} />
                <SetPomodoro navigation={navigation} />
                <Text style={styles(themeData).text}>Themes</Text>
                <View style={styles(themeData).separator} />
                <View style={styles(themeData).themeContainer}>
                    {themes.map((theme) => (
                        <TouchableOpacity
                            onPress={() => updateTheme(theme)}
                            key={theme}
                        >
                            <View style={styles(getTheme(theme)).bgColor} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create((theme: SingleTheme) => ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.primaryColor,
    },
    header: {
        fontSize: 36,
        color: theme.secondaryColor,
        marginBottom: 5,
        alignSelf: "center",
    },
    text: {
        fontSize: 36,
        color: theme.accentColor,
        marginBottom: 5,
    },
    separator: {
        borderWidth: 0.3,
        borderColor: theme.secondaryAccent,
        width: "100%",
        marginBottom: 20,
        marginTop: 10,
    },
    themeContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
    },
    bgColor: {
        width: 80,
        height: 80,
        backgroundColor: theme.primaryColor,
        borderWidth: 2,
        borderColor: theme.secondaryAccent,
        borderRadius: 5,
    },
}));
