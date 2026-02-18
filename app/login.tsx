import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleButton from "../components/GoogleButton";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";

export default function LoginScreen() {
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
        <Pressable onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

        {/* Logo Section (Same as Welcome) */}
        <View className="items-center mb-6">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-52 h-52"
            resizeMode="contain"
          />

          <Text
            className="text-xl font-bold text-center mt-2"
            style={{ color: Colors.accent }}
          >
            Welcome Back
          </Text>

          <Text
            className="text-base text-center mt-1"
            style={{ color: Colors.textSecondary }}
          >
            Login to continue your learning
          </Text>
        </View>

        {/* Form */}
        <InputField
          label="Email Address"
          placeholder="your.email@example.com"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <Pressable className="items-end mb-6">
          <Text style={{ color: Colors.primary }}>Forgot Password?</Text>
        </Pressable>

        <PrimaryButton
          title="Login"
          handlePress={() => console.log("Login Pressed")}
        />

        <Text
          className="text-center my-4 text-sm"
          style={{ color: Colors.textMuted }}
        >
          or
        </Text>

        <GoogleButton handlePress={() => console.log("Google Login")} />

        <View className="flex-row justify-center mt-6">
          <Text style={{ color: Colors.textSecondary }}>
            Don't have an account?{" "}
          </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={{ color: Colors.primary }}>Sign Up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
