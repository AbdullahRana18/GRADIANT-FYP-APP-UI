import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

export default function SolutionScreen() {
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
        {/* 🔙 Back */}
        <Pressable onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

        <ScrollView>
          {/* Question */}
          <Text
            className="text-xl font-bold mb-4"
            style={{ color: Colors.accent }}
          >
            Question:
          </Text>

          <Text style={{ color: Colors.white }}>Solve: x² - 5x + 6 = 0</Text>

          {/* Steps */}
          <Text
            className="text-xl font-bold mt-6 mb-2"
            style={{ color: Colors.accent }}
          >
            Step-by-Step Solution:
          </Text>

          <Text style={{ color: Colors.white }}>
            Step 1: Identify the equation{"\n"}
            x² - 5x + 6 = 0{"\n\n"}
            Step 2: Factorize the equation{"\n"}
            (x - 2)(x - 3) = 0{"\n\n"}
            Step 3: Apply zero product rule{"\n"}x - 2 = 0 OR x - 3 = 0{"\n\n"}
            Step 4: Solve values{"\n"}x = 2 OR x = 3
          </Text>

          {/* Final Answer */}
          <Text
            className="mt-6 text-lg font-bold"
            style={{ color: Colors.primary }}
          >
            Final Answer: x = 2, 3
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
