import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GeoAnswerCard from "../components/GeoAnswerCard";
import GeoFeatures from "../components/GeoFeatures";
import GeoMap from "../components/GeoMap";
import Colors from "../constants/Colors";

export default function GeographySolution() {
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
        <Pressable onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>

        <ScrollView>
          <Text
            style={{ color: Colors.accent }}
            className="text-xl font-bold mb-2"
          >
            Question
          </Text>

          <Text style={{ color: "white" }}>
            Explain the formation of river deltas with reference to the Nile
            Delta.
          </Text>

          {/* 🔍 AI Features */}
          <GeoFeatures />

          {/* 🗺️ Map */}
          <GeoMap />

          {/* 📄 Answer */}
          <GeoAnswerCard />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
