import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleButton from "../components/GoogleButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function WelcomeScreen() {
  return (
    <LinearGradient
      colors={["#0B1628", "#0E1F3B", "#0B1628"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 justify-between px-6 py-12">
        {/* Top / Center Section */}
        <View className="items-center mt-6">
          {/* Logo (Thora Bara + Balanced) */}
          <Image
            source={require("../assets/images/logo.png")}
            className="w-52 h-52"
            resizeMode="contain"
          />

          {/* Tagline (Logo ke bilkul neeche) */}
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            className="text-[#4FD1C5] text-xl font-bold text-center mt-3 w-full"
          >
            Smarter Answers, Better Grades
          </Text>

          {/* Sub Tagline (Zyada Visible) */}
          <Text className="text-slate-300 text-base text-center mt-2 px-4">
            AI-Powered Exam Intelligence
          </Text>
        </View>

        {/* Bottom Section */}
        <View className="mb-4">
          <PrimaryButton title="Login" />
          <SecondaryButton title="Sign Up" />

          <Text className="text-slate-400 text-center my-4 text-sm">or</Text>

          <GoogleButton />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
