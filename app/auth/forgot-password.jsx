import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDecor from "../../components/shared/AppDecor";
import InputField from "../../components/auth/InputField";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Colors from "../../constants/Colors";
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
      <AppDecor />
      <SafeAreaView className="flex-1 px-6 py-8">
        <Pressable onPress={() => router.back()} className="mb-2">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

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
        <View
          className="p-5 rounded-3xl"
          style={{
            backgroundColor: Colors.surface,
            borderWidth: 1,
            borderColor: Colors.cardBorder,
          }}
        >
          <InputField
            label="Email or Phone Number"
            placeholder="Enter your email or phone number"
          />

          <PrimaryButton
            title="Send OTP"
            handlePress={() => router.push("/auth/verify-otp")}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
