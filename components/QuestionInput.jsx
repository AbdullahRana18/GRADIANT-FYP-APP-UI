import { Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

export default function QuestionInput() {
  return (
    <View className="mb-4">
      <Text style={{ color: Colors.textSecondary }}>Enter your question</Text>

      <TextInput
        placeholder="Type your question..."
        placeholderTextColor={Colors.textMuted}
        multiline
        className="mt-2 p-4 rounded-xl"
        style={{
          backgroundColor: Colors.inputBackground,
          color: Colors.white,
          minHeight: 120,
        }}
      />
    </View>
  );
}
