import { useFonts } from "expo-font"
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen"
import { HankenGrotesk_300Light, HankenGrotesk_400Regular, HankenGrotesk_400Regular_Italic, HankenGrotesk_500Medium, HankenGrotesk_600SemiBold, HankenGrotesk_700Bold } from "@expo-google-fonts/hanken-grotesk"
import { JetBrainsMono_300Light, JetBrainsMono_400Regular, JetBrainsMono_500Medium, JetBrainsMono_600SemiBold, JetBrainsMono_700Bold } from "@expo-google-fonts/jetbrains-mono"
import React, { useEffect } from "react";
import "@/global.css"
import { StatusBar, View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";


export default function RootLayout() {

  const [loaded, error] = useFonts({
    HankenGrotesk_300Light,
    HankenGrotesk_400Regular,
    HankenGrotesk_500Medium,
    HankenGrotesk_600SemiBold,
    HankenGrotesk_700Bold,
    JetBrainsMono_300Light,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded || error) return null

  return (
    <KeyboardProvider>
      <React.Fragment>
        <StatusBar barStyle={"dark-content"} />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(public)" />
          <Stack.Screen name="(app)" />
        </Stack>
      </React.Fragment>
    </KeyboardProvider>
  );
}
