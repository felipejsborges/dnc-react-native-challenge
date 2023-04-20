import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";

import theme from "./src/theme";

import { Navigation } from "./src/navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Raleway_600SemiBold,
    Poppins_800ExtraBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <SafeAreaView
        style={{ backgroundColor: theme.COLORS.BACKGROUND, height: "100%" }}
      >
        {fontsLoaded && <Navigation />}
      </SafeAreaView>
    </ThemeProvider>
  );
}
