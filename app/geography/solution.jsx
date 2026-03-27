import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView, Text, View, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDecor from "../../components/shared/AppDecor";
import GeoAnswerCard from "../../components/geography/GeoAnswerCard";
import GeoFeatures from "../../components/geography/GeoFeatures";
import GeoMap from "../../components/geography/GeoMap";
import ScreenHeader from "../../components/shared/ScreenHeader";
import SectionCard from "../../components/shared/SectionCard";
import Colors from "../../constants/Colors";

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
      <AppDecor />
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <ScreenHeader
            onBack={() => router.back()}
            title="Geography solution"
            subtitle="Sample breakdown — keywords, map, and examiner-style points."
            icon="map-marker-radius"
          />

          <SectionCard label="Question" icon="help-circle-outline">
            <Text style={styles.qText}>
              Explain the formation of river deltas with reference to the Nile
              Delta.
            </Text>
          </SectionCard>

          <View style={{ height: 16 }} />

          <View style={styles.block}>
            <GeoFeatures />
          </View>

          <View style={{ height: 12 }} />

          <View style={styles.block}>
            <GeoMap />
          </View>

          <View style={{ height: 12 }} />

          <GeoAnswerCard />
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
  qText: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 26,
  },
  block: {
    borderRadius: 20,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 10,
      },
      android: { elevation: 5 },
    }),
  },
});
