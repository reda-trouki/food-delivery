import { Stack } from "expo-router";
import { useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black_Italic, Lato_900Black, Lato_100Thin, Lato_100Thin_Italic, Lato_300Light, Lato_300Light_Italic, Lato_400Regular_Italic, Lato_700Bold_Italic } from '@expo-google-fonts/lato';
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Lato-Thin': Lato_100Thin,
    'Lato-ThinItalic': Lato_100Thin_Italic,

    'Lato-Light': Lato_300Light,
    'Lato-LightItalic': Lato_300Light_Italic,

    'Lato-Regular': Lato_400Regular,
    'Lato-Italic': Lato_400Regular_Italic,

    'Lato-Bold': Lato_700Bold,
    'Lato-BoldItalic': Lato_700Bold_Italic,

    'Lato-Black': Lato_900Black,
    'Lato-BlackItalic': Lato_900Black_Italic,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            contentStyle: {
              backgroundColor: "#F8FAFC"
            }
          }}
        >
          <Stack.Screen
            name="(tabs)"
          />

          <Stack.Screen
            name="track-order"
          />
        </Stack>
      </SafeAreaProvider>
    </>
  )
}
