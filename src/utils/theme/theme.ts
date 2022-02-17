export interface ThemeObject {
    [key: string]: {
        primaryColor: string;
        secondaryColor: string;
        accentColor: string;
        secondaryAccent: string;
        dark: boolean;
    };
}

export interface SingleTheme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    secondaryAccent: string;
    dark: boolean;
}

const ThemeData: ThemeObject = {
    default: {
        primaryColor: "#6D9773",
        secondaryColor: "#EAF1EA",
        accentColor: "#2D322B",
        secondaryAccent: "#BECDBE",
        dark: true,
    },
    blue: {
        primaryColor: "#4424A9",
        secondaryColor: "#06C0d7",
        accentColor: "#FAF9FF",
        secondaryAccent: "#8E8ED5",
        dark: true,
    },
    brown: {
        primaryColor: "#6A4B39",
        secondaryColor: "#EA7D1A",
        accentColor: "#ECECED",
        secondaryAccent: "#D08D66",
        dark: true,
    },
    defaultDark: {
        primaryColor: "#1F2128",
        secondaryColor: "#FFEA30",
        accentColor: "#ECECED",
        secondaryAccent: "#768991",
        dark: false,
    },
};

export default ThemeData;
