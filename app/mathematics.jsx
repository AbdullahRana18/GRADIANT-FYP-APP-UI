import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionInput from "../components/QuestionInput";
import Colors from "../constants/Colors";

export default function MathematicsScreen() {
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
        {/* 🔙 Back Button */}
        <Pressable onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

        {/* Title */}
        <Text
          className="text-2xl font-bold mb-2"
          style={{ color: Colors.accent }}
        >
          Mathematics Solver
        </Text>

        <Text style={{ color: Colors.textSecondary }}>
          Enter your math question (O Level)
        </Text>

        {/* Input */}
        <View className="mt-6">
          <QuestionInput />
        </View>

        {/* Solve Button */}
        <Pressable
          onPress={() => router.push("/solution")}
          className="mt-6 py-4 rounded-xl items-center"
          style={{ backgroundColor: Colors.primary }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Solve Question
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}
