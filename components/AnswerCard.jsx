import { Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function AnswerCard() {
  return (
    <View
      className="p-4 rounded-xl"
      style={{ backgroundColor: Colors.inputBackground }}
    >
      {/* 📌 Question */}
      <Text style={{ color: Colors.accent }} className="mb-2 font-bold">
        Question:
      </Text>

      <Text style={{ color: Colors.white }}>Solve: x² - 5x + 6 = 0</Text>

      {/* 🧠 Steps */}
      <Text style={{ color: Colors.accent }} className="mt-4 mb-2 font-bold">
        Step-by-Step Solution:
      </Text>

      <Text style={{ color: Colors.white }}>
        Step 1: Compare with standard form ax² + bx + c = 0{"\n"}a = 1, b = -5,
        c = 6{"\n\n"}
        Step 2: Find two numbers whose product = 6 and sum = -5{"\n"}→ -2 and -3
        {"\n\n"}
        Step 3: Factorize equation{"\n"}
        x² - 2x - 3x + 6 = 0{"\n"}
        x(x - 2) -3(x - 2) = 0{"\n\n"}
        Step 4: Take common terms{"\n"}
        (x - 2)(x - 3) = 0
      </Text>

      {/* ✅ Final Answer */}
      <Text className="mt-4 font-bold" style={{ color: Colors.primary }}>
        Final Answer: x = 2, x = 3
      </Text>
    </View>
  );
}
