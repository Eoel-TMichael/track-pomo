import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 5,
        color: "#c9ccea",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#fff",
    },

    text: {
        fontSize: 26,
        marginBottom: 5,
    },

    labels: {
        flexDirection: "row",
        display: "flex",
        textTransform: "uppercase",
        fontSize: 15,
        padding: 0.1,
        margin: 10,
        borderRadius: 20,
    },

    activeLabel: {
        color: "#0C0E1B",
        backgroundColor: "#FE6F6B",
    },

    timerContainer: {
        display: "flex",
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
    },

    timeWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 14,
        width: 14,
        borderRadius: 16,
        color: "#efefef",
        fontSize: 25,
    },

    CustomButtonWrapper: {
        display: "flex",
        alignItems: "center",
        padding: 6,
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-evenly",
    },

    button: {
        color: "#efefef",
        fontSize: 10,
        padding: 5,
        borderRadius: 10,
        margin: 10,
        width: 10,
    },

    buttonActive: {
        color: "#0C0E1B",
    },

    formContainer: {
        textAlign: "center",
    },

    inputWrapper: {
        flexDirection: "row",
        height: 30,
        justifyContent: "space-between",
        margin: 20,
        // width: 30,
        // padding: 20,
        // backgroundColor: "#0C0E1B",
        // color: "#C9CCEA",
        // borderRadius: 100,
        // marginRight: 10,
        // textAlign: "center",
        // fontSize: 15,
    },

    input: {
        height: 40,
        width: "30%",
        paddingLeft: 5,
        // backgroundColor: "#0C0E1B",
        // color: "#C9CCEA",
        borderWidth: 1,
        borderColor: "#ccc",
        // borderRadius: 100,
        // marginRight: 10,
        // textAlign: "center",
        // fontSize: 50,
    },
});

export default styles;
