import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDecor from "../../components/shared/AppDecor";
import GoogleButton from "../../components/auth/GoogleButton";
import InputField from "../../components/auth/InputField";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Colors from "../../constants/Colors";

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
      <AppDecor />
      <SafeAreaView className="flex-1 px-6 py-8">
        <Pressable onPress={() => router.back()} className="mb-2">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

        <View className="items-center mb-5">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-40 h-40"
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

        <View
          className="p-5 rounded-3xl"
          style={{
            backgroundColor: Colors.surface,
            borderWidth: 1,
            borderColor: Colors.cardBorder,
          }}
        >
          <InputField
            label="Email Address"
            placeholder="your.email@example.com"
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />

          <Pressable
            className="items-end mb-6"
            onPress={() => router.push("/auth/forgot-password")}
          >
            <Text style={{ color: Colors.primary }}>Forgot password?</Text>
          </Pressable>

          <PrimaryButton
            title="Login"
            handlePress={() => router.replace("/dashboard")}
          />

          <Text
            className="text-center my-4 text-sm"
            style={{ color: Colors.textMuted }}
          >
            or
          </Text>

          <GoogleButton handlePress={() => router.push("/auth/google-auth")} />

          <View className="flex-row justify-center mt-6">
            <Text style={{ color: Colors.textSecondary }}>
              Don&apos;t have an account?{" "}
            </Text>

            <Pressable onPress={() => router.push("/auth/signup")}>
              <Text style={{ color: Colors.primary }}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
