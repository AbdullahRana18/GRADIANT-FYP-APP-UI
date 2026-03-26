import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import Colors from "../constants/Colors";

export default function ImageUploader({ onImageSelect }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      onImageSelect(uri);
    }
  };

  return (
    <>
      <Pressable
        onPress={pickImage}
        className="p-4 rounded-xl mb-4 items-center"
        style={{ backgroundColor: Colors.inputBackground }}
      >
        <Text style={{ color: Colors.white }}>Upload Map / Diagram</Text>
      </Pressable>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
          className="mb-4"
        />
      )}
    </>
  );
}
