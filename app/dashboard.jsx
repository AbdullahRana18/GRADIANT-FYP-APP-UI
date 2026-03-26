import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; // ✅ ADD
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SubjectCard from "../components/SubjectCard";
import Colors from "../constants/Colors";

export default function Dashboard() {
  const router = useRouter(); // ✅ ADD

  return (
    <LinearGradient
      colors={[
        Colors.backgroundStart,
        Colors.backgroundMiddle,
        Colors.backgroundEnd,
      ]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 px-4 py-6">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* 🔝 HEADER */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center gap-3">
              <Image
                source={require("../assets/images/logo.png")}
                className="w-12 h-12 rounded-full"
              />
              <View>
                <Text style={{ color: Colors.textSecondary }}>
                  Hello, Rana 👋
                </Text>
                <Text className="font-bold" style={{ color: Colors.accent }}>
                  O Level Student
                </Text>
              </View>
            </View>

            <View className="flex-row gap-4">
              <Ionicons name="notifications-outline" size={24} color="white" />
              <Ionicons name="log-out-outline" size={24} color="white" />
            </View>
          </View>

          {/* 📊 TOTAL QUESTIONS */}
          <View
            className="p-4 rounded-xl mb-6"
            style={{ backgroundColor: Colors.inputBackground }}
          >
            <Text style={{ color: Colors.textSecondary }}>
              Total Questions Asked
            </Text>
            <Text
              className="text-2xl font-bold mt-1"
              style={{ color: Colors.white }}
            >
              25
            </Text>
          </View>

          {/* 📚 SUBJECTS */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: Colors.accent }}
          >
            Select Subject
          </Text>

          <View className="flex-row flex-wrap justify-between">
            <SubjectCard
              title="Mathematics"
              icon="calculator"
              onPress={() => router.push("/mathematics")}
            />

            <SubjectCard
              title="History"
              icon="book"
              onPress={() => router.push("/history")}
            />

            <SubjectCard
              title="Geography"
              icon="earth"
              //   onPress={() => router.push("/geography")}
            />

            <SubjectCard
              title="Economics"
              icon="stats-chart"
              //   onPress={() => router.push("/economics")}
            />
          </View>

          {/* 🕘 RECENT QUESTIONS */}
          <Text
            className="text-lg font-bold mt-6 mb-3"
            style={{ color: Colors.accent }}
          >
            Recent Questions
          </Text>

          <View
            className="p-4 rounded-xl"
            style={{ backgroundColor: Colors.inputBackground }}
          >
            <Text style={{ color: Colors.white }}>
              • Solve quadratic equation
            </Text>
            <Text style={{ color: Colors.white }}>
              • Define inflation (Economics)
            </Text>
            <Text style={{ color: Colors.white }}>• Causes of World War 1</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
