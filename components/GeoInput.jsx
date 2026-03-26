import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

export default function GeoInput({ onSubmit }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      {/* TEXT INPUT */}
      <Text style={{ color: Colors.textSecondary }}>
        Enter your question (optional)
      </Text>

      <TextInput
        placeholder="e.g. Explain Indus River system"
        placeholderTextColor={Colors.textMuted}
        value={text}
        onChangeText={setText}
        className="mt-2 p-4 rounded-xl"
        style={{
          backgroundColor: Colors.inputBackground,
          color: Colors.white,
          minHeight: 100,
        }}
        multiline
      />

      {/* IMAGE BUTTON */}
      <Pressable
        onPress={pickImage}
        className="p-4 rounded-xl mt-3 items-center"
        style={{ backgroundColor: Colors.inputBackground }}
      >
        <Text style={{ color: Colors.white }}>
          Upload Map / Diagram (Optional)
        </Text>
      </Pressable>

      {/* IMAGE PREVIEW */}
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
          className="mt-3"
        />
      )}

      {/* SUBMIT */}
      <Pressable
        onPress={() => onSubmit({ text, image })}
        className="py-4 rounded-xl items-center mt-4"
        style={{ backgroundColor: Colors.primary }}
      >
        <Text style={{ color: "white" }}>Analyze</Text>
      </Pressable>
    </View>
  );
}
