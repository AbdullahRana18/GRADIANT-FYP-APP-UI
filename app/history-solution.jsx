import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HistoryAnswerCard from "../components/HistoryAnswerCard";
import Colors from "../constants/Colors";

export default function HistorySolutionScreen() {
  const router = useRouter();
  const { marks } = useLocalSearchParams();

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

          <Text style={{ color: Colors.white }}>
            Describe the effects of the partition of 1947 on the people of
            Pakistan.
          </Text>

          {/* Answer */}
          <HistoryAnswerCard marks={marks} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
