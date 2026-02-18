import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleButton from "../components/GoogleButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Colors from "../constants/Colors";

export default function WelcomeScreen() {
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
      <SafeAreaView className="flex-1 justify-between px-6 py-12">
        {/* Top Section */}
        <View className="items-center mt-6">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-52 h-52"
            resizeMode="contain"
          />

          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            className="text-xl font-bold text-center mt-3 w-full"
            style={{ color: Colors.accent }}
          >
            Smarter Answers, Better Grades
          </Text>

          <Text
            className="text-base text-center mt-2 px-4"
            style={{ color: Colors.textSecondary }}
          >
            AI-Powered Exam Intelligence
          </Text>
        </View>

        {/* Bottom Section */}
        <View className="mb-4">
          <PrimaryButton
            title="Login"
            handlePress={() => router.push("/login")}
          />

          <SecondaryButton
            title="Sign Up"
            handlePress={() => router.push("/signup")}
          />

          <Text
            className="text-center my-4 text-sm"
            style={{ color: Colors.textMuted }}
          >
            or
          </Text>

          <GoogleButton handlePress={() => console.log("Google Login")} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
