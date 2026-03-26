import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import Colors from "../constants/Colors";

export default function SubjectCard({ title, icon, onPress }) {
  // ✅ ADD onPress
  return (
    <Pressable
      onPress={onPress} // ✅ VERY IMPORTANT
      className="w-[48%] p-4 rounded-xl mb-4 items-center"
      style={{ backgroundColor: Colors.inputBackground }}
    >
      <Ionicons name={icon} size={28} color={Colors.accent} />
      <Text className="mt-2 font-medium" style={{ color: Colors.white }}>
        {title}
      </Text>
    </Pressable>
  );
}
