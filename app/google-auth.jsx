import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";

export default function GoogleAuthScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={[
        Colors.backgroundStart,
        Colors.backgroundMiddle,
        Colors.backgroundEnd,
      ]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-6 py-8">
        {/* Back Button */}
        <Pressable onPress={() => router.back()} className="mb-6">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

        {/* Google Icon */}
        <View className="items-center mt-10">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-40 h-40"
            resizeMode="contain"
          />

          <Text
            className="text-2xl font-bold mt-6"
            style={{ color: Colors.accent }}
          >
            Google Sign In
          </Text>

          <Text
            className="text-center mt-3"
            style={{ color: Colors.textSecondary }}
          >
            Continue your account with Google
          </Text>
        </View>

        {/* Button */}
        <View className="mt-10">
          <PrimaryButton
            title="Continue"
            handlePress={() => console.log("Google Auth")}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
