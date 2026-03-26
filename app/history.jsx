import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"; // ✅ IMPORTANT
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionInput from "../components/QuestionInput";
import Colors from "../constants/Colors";

export default function HistoryScreen() {
  const router = useRouter();

  const [marks, setMarks] = useState(4);
  const [image, setImage] = useState(null);

  // 📷 OPEN GALLERY FUNCTION
  const pickImage = async () => {
    // permission
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Permission required!");
      return;
    }

    // open gallery
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // ✅ selected image
    }
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
        {/* 🔙 Back */}
        <Pressable onPress={() => router.back()} className="mb-4">
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </Pressable>

        {/* Title */}
        <Text
          className="text-2xl font-bold mb-2"
          style={{ color: Colors.accent }}
        >
          History Answer Generator
        </Text>

        <Text style={{ color: Colors.textSecondary }}>
          Enter your history question (O Level)
        </Text>

        {/* Input */}
        <View className="mt-6">
          <QuestionInput />
        </View>

        {/* 📷 REAL IMAGE UPLOAD */}
        <Pressable
          className="mt-4 rounded-xl items-center justify-center"
          style={{
            backgroundColor: Colors.inputBackground,
            height: 120,
            overflow: "hidden",
          }}
          onPress={pickImage} // ✅ REAL FUNCTION
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          ) : (
            <Text style={{ color: Colors.textSecondary }}>
              Tap to Upload Image (Gallery)
            </Text>
          )}
        </Pressable>

        {/* 🎯 Marks */}
        <Text className="mt-4 mb-2" style={{ color: Colors.textSecondary }}>
          Select Marks:
        </Text>

        <View className="flex-row gap-3">
          {[4, 7, 14].map((m) => (
            <Pressable
              key={m}
              onPress={() => setMarks(m)}
              className="px-4 py-2 rounded-xl"
              style={{
                backgroundColor:
                  marks === m ? Colors.primary : Colors.inputBackground,
              }}
            >
              <Text style={{ color: "white" }}>{m} Marks</Text>
            </Pressable>
          ))}
        </View>

        {/* 🚀 Button */}
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/history-solution",
              params: { marks },
            })
          }
          className="mt-6 py-4 rounded-xl items-center"
          style={{ backgroundColor: Colors.primary }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Generate Answer
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}
