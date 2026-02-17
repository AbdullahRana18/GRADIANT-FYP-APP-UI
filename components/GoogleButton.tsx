import { Pressable, Text, View } from "react-native";
import GoogleIcon from "./GoogleIcon";

export default function GoogleButton() {
  return (
    <Pressable
      className="bg-white py-4 rounded-lg items-center active:opacity-80"
      onPress={() => console.log("Google Login Pressed")}
    >
      <View className="flex-row items-center gap-3">
        <GoogleIcon size={22} />
        <Text className="text-black text-base font-medium">
          Continue with Google
        </Text>
      </View>
    </Pressable>
  );
}
