import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDecor from "../../components/shared/AppDecor";
import GeoAnswerCard from "../../components/geography/GeoAnswerCard";
import GeoInput from "../../components/geography/GeoInput";
import GeoMapView from "../../components/geography/GeoMapView";
import ScreenHeader from "../../components/shared/ScreenHeader";
import SectionCard from "../../components/shared/SectionCard";
import Colors from "../../constants/Colors";

export default function GeographyScreen() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [showResult, setShowResult] = useState(false);

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

  const getQueryType = () => {
    const hasImg =
      (data?.images?.length ?? 0) > 0 || Boolean(data?.image);
    const hasText = Boolean(data?.text?.trim?.());
    if (hasText && hasImg) return "both";
    if (hasImg) return "image";
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
      <AppDecor />
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <ScreenHeader
            onBack={() => router.back()}
            title="Geography"
            subtitle="GIS-style map + text or diagram analysis for O Level."
            icon="earth"
          />

          <SectionCard
            label="Ask or upload"
            icon="map-search-outline"
            style={styles.mainCard}
          >
            <GeoInput compact onSubmit={handleSubmit} />
          </SectionCard>

          {showResult && (
            <View style={styles.resultBlock}>
              <Text style={styles.resultHeading}>GIS visualization</Text>
              <View style={styles.mapShell}>
                <GeoMapView rivers={rivers} />
              </View>
              <GeoAnswerCard queryType={getQueryType()} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 22,
    paddingBottom: 36,
    paddingTop: 8,
  },
  mainCard: {
    marginTop: 8,
    borderRadius: 24,
    padding: 18,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.22,
        shadowRadius: 14,
      },
      android: { elevation: 8 },
    }),
  },
  resultBlock: {
    marginTop: 20,
  },
  resultHeading: {
    color: Colors.accent,
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  mapShell: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
});
