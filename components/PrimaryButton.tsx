import { ActivityIndicator, Pressable, Text } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
}

export default function PrimaryButton({
  title,
  handlePress,
  isLoading = false,
}: Props) {
  return (
    <Pressable
      onPress={handlePress}
      disabled={isLoading}
      className="py-4 rounded-xl items-center mb-3 active:opacity-80"
      style={{ backgroundColor: Colors.primary }}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text
          className="text-base font-semibold"
          style={{ color: Colors.white }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
