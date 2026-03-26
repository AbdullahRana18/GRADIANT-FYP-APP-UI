import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GeoAnswerCard from "../components/GeoAnswerCard";
import GeoInput from "../components/GeoInput";
import GeoMapView from "../components/GeoMapView";
import Colors from "../constants/Colors";

export default function GeographyScreen() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // GIS DATA
  const rivers = [
    {
      label: "Indus",
      color: "#3b82f6",
      coords: [
        { latitude: 36.95, longitude: 75 },
        { latitude: 34.2, longitude: 72.6 },
        { latitude: 31.5, longitude: 70.9 },
        { latitude: 27.3, longitude: 68.7 },
        { latitude: 24, longitude: 67.5 },
      ],
    },
  ];

  const handleSubmit = (input) => {
    setData(input);
    setShowResult(true);
  };

  // detect type
  const getQueryType = () => {
    if (data?.text && data?.image) return "both";
    if (data?.image) return "image";
    return "text";
  };

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
          {/* BACK */}
          <Pressable onPress={() => router.back()} className="mb-4">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          {/* TITLE */}
          <Text
            className="text-2xl font-bold mb-2"
            style={{ color: Colors.accent }}
          >
            Geography AI Analysis 🌍
          </Text>

          <Text style={{ color: Colors.textSecondary }}>
            Ask using text or upload map/diagram
          </Text>

          {/* INPUT */}
          <GeoInput onSubmit={handleSubmit} />

          {/* RESULT */}
          {showResult && (
            <View className="mt-6">
              {/* MAP */}
              <Text className="mb-2 font-bold" style={{ color: Colors.accent }}>
                GIS Visualization
              </Text>

              <GeoMapView rivers={rivers} />

              {/* ANSWER */}
              <GeoAnswerCard queryType={getQueryType()} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
