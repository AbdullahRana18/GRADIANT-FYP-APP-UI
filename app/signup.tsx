import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
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
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";

export default function SignUpScreen() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      colors={[
        Colors.backgroundStart,
        Colors.backgroundMiddle,
        Colors.backgroundEnd,
      ]}
      className="flex-1"
    >
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
            {/* Back Button */}
            <Pressable onPress={() => router.back()} className="mb-4 mt-2">
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </Pressable>

            {/* Logo Section */}
            <View className="items-center mb-6">
              <Image
                source={require("../assets/images/logo.png")}
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

            {/* Form */}
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

            {/* Button */}
            <View className="mt-4">
              <PrimaryButton
                title="Create Account"
                handlePress={() => console.log("Create Account")}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
