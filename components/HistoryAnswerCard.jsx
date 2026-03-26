import { Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function HistoryAnswerCard({ marks }) {
  return (
    <View
      className="mt-6 p-4 rounded-xl"
      style={{ backgroundColor: Colors.inputBackground }}
    >
      <Text style={{ color: Colors.accent }} className="font-bold mb-2">
        Answer ({marks} Marks)
      </Text>

      {/* ✅ 4 Marks */}
      {marks == 4 && (
        <Text style={{ color: Colors.white }}>
          Partition of 1947 caused migration and violence. Many Muslims moved to
          Pakistan and faced problems like loss of homes and resources.
        </Text>
      )}

      {/* ✅ 7 Marks */}
      {marks == 7 && (
        <Text style={{ color: Colors.white }}>
          The partition led to mass migration, violence, and economic problems.
          Millions migrated to Pakistan and faced refugee crises, loss of
          property, and instability.
        </Text>
      )}

      {/* ✅ 14 Marks */}
      {marks == 14 && (
        <>
          <Text style={{ color: Colors.accent }} className="font-bold mt-2">
            Introduction
          </Text>
          <Text style={{ color: Colors.white }}>
            The partition of 1947 resulted in the creation of Pakistan and
            caused major social and economic changes.
          </Text>

          <Text style={{ color: Colors.accent }} className="font-bold mt-4">
            Key Effects
          </Text>
          <Text style={{ color: Colors.white }}>
            • Mass migration of Muslims{"\n"}• Loss of homes and property{"\n"}•
            Communal violence and deaths{"\n"}• Refugee crisis{"\n"}• Economic
            instability
          </Text>

          <Text style={{ color: Colors.accent }} className="font-bold mt-4">
            Cause–Effect Explanation
          </Text>
          <Text style={{ color: Colors.white }}>
            The sudden division of India caused chaos and violence. As a result,
            millions migrated and Pakistan faced economic and social challenges.
          </Text>

          <Text style={{ color: Colors.accent }} className="font-bold mt-4">
            Conclusion
          </Text>
          <Text style={{ color: Colors.white }}>
            Overall, partition had a deep impact on Pakistan’s society and early
            development.
          </Text>
        </>
      )}
    </View>
  );
}
