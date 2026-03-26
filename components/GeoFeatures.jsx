import { Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function GeoFeatures() {
  return (
    <View
      className="mt-6 p-4 rounded-xl"
      style={{ backgroundColor: Colors.inputBackground }}
    >
      <Text style={{ color: Colors.accent }} className="font-bold mb-2">
        AI Analysis
      </Text>

      <Text style={{ color: "white" }}>
        🔹 Keywords: river, delta, sediment, deposition{"\n"}
        🔹 Locations Detected: Nile River, Egypt{"\n"}
        🔹 OCR Text: "Delta region fertile land"
      </Text>
    </View>
  );
}
