import { ActivityIndicator, Pressable, Text, View } from "react-native";
import Colors from "../constants/Colors";
import GoogleIcon from "./GoogleIcon";

interface Props {
  handlePress: () => void;
  isLoading?: boolean;
}

export default function GoogleButton({
  handlePress,
  isLoading = false,
}: Props) {
  return (
    <Pressable
      onPress={handlePress}
      disabled={isLoading}
      className="py-4 rounded-lg items-center active:opacity-80"
      style={{ backgroundColor: Colors.white }}
    >
      <View className="flex-row items-center gap-3">
        {isLoading ? (
          <ActivityIndicator color={Colors.primary} />
        ) : (
          <>
            <GoogleIcon size={22} />
            <Text
              className="text-base font-medium"
              style={{ color: Colors.black }}
            >
              Continue with Google
            </Text>
          </>
        )}
      </View>
    </Pressable>
  );
}
