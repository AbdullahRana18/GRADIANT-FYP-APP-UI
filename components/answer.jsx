import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnswerCard from "../components/AnswerCard";
import Colors from "../constants/Colors";

export default function AnswerScreen() {
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
        <ScrollView>
          <Text
            className="text-2xl font-bold mb-4"
            style={{ color: Colors.accent }}
          >
            Answer
          </Text>

          <AnswerCard />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
