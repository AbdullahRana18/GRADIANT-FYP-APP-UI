import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDecor from "../../components/shared/AppDecor";
import InputField from "../../components/auth/InputField";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Colors from "../../constants/Colors";

export default function VerifyOtpScreen() {
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

        <Text
          className="text-2xl font-bold mb-2"
          style={{ color: Colors.accent }}
        >
          Verify OTP
        </Text>

        <Text style={{ color: Colors.textSecondary }}>
          Enter the OTP sent to your email
        </Text>

        <View
          className="mt-6 p-5 rounded-3xl"
          style={{
            backgroundColor: Colors.surface,
            borderWidth: 1,
            borderColor: Colors.cardBorder,
          }}
        >
          <InputField label="OTP Code" placeholder="Enter OTP" />

          <PrimaryButton
            title="Verify"
            handlePress={() => console.log("OTP Verified")}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
