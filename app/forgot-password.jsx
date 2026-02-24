import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";
export default function ForgotPasswordScreen() {
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
        {/* Title */}
        <View className="mb-8">
          <Text
            className="text-2xl font-bold "
            style={{ color: Colors.accent }}
          >
            Forgot Password
          </Text>
          <Text
            className="text-base mt-2"
            style={{ color: Colors.textSecondary }}
          >
            Enter your email or phone number to receive OTP
          </Text>
        </View>
        {/* Input */}
        <InputField
          label="Email or Phone Number"
          placeholder="Enter your email or phone number"
        />
        {/* Send OTP Button */}
        <PrimaryButton
          title="Send OTP"
          handlePress={() => router.push("/verify-otp")}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
