import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDecor from "../../components/shared/AppDecor";
import InputField from "../../components/auth/InputField";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Colors from "../../constants/Colors";

export default function SignUpScreen() {
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
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingBottom: 40,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Pressable onPress={() => router.back()} className="mb-2 mt-2">
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </Pressable>

            <View className="items-center mb-6">
              <Image
                source={require("../../assets/images/logo.png")}
                className="w-40 h-40"
                resizeMode="contain"
              />

              <Text
                className="text-xl font-bold text-center mt-3"
                style={{ color: Colors.accent }}
              >
                Create Account
              </Text>

              <Text
                className="text-base text-center mt-1"
                style={{ color: Colors.textSecondary }}
              >
                Start your journey to better grades
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
              <InputField label="Full Name" placeholder="Enter your full name" />

              <InputField
                label="Email Address"
                placeholder="your.email@example.com"
              />

              <InputField label="O Level Year" placeholder="Select your year" />

              <InputField
                label="Password"
                placeholder="Create a strong password"
                secureTextEntry
              />

              <InputField
                label="Confirm Password"
                placeholder="Re-enter your password"
                secureTextEntry
              />

              <View className="mt-4">
                <PrimaryButton
                  title="Create Account"
                  handlePress={() => router.replace("/onboarding")}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
