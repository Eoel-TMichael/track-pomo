import { useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
    useAnimatedProps,
    interpolate,
    multiply,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const size = width - 32;
const strokeWidth = 5;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CustomCircleTimerProps {
    progress: typeof Animated.Value;
    start: boolean;
    color: string;
    trailingColor: string;
}

export default function CustomCircleTimer({
    progress,
    start,
    color,
    trailingColor,
}: CustomCircleTimerProps) {
    // TODO how to use interpolate without using a Animated Object

    const alpha = interpolate(progress, [0, 100], [0, 2 * Math.PI * radius]);

    const strokeDashOffset = useAnimatedProps(() => ({
        strokeDashOffset: multiply(alpha, radius),
    }));

    return (
        start && (
            <View style={styles.container}>
                <Svg height={size} width={size}>
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={trailingColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    <AnimatedCircle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeWidth={strokeWidth}
                        animatedProps={strokeDashOffset}
                    />
                </Svg>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dde6f0",
    },
});
